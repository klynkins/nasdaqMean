/* global angular */

angular.module("meanstock").controller("StocksController", StocksController);

function StocksController(stockDataFactory){
	var vm = this;
	vm.title = "MEAN Nasdaq App";
	stockDataFactory.stockList().then(function(response){
		vm.stocks = response.data; 
	});
}