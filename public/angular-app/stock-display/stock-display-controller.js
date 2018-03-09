/* global angular */

angular.module('meanstock').controller('StockController', StockController);

function StockController ($route, $routeParams, stockDataFactory){
	var vm = this;
	var id= $routeParams.id;
	vm.isSubmitted = false;
	stockDataFactory.stockDisplay(id).then(function(response){
		vm.stock = response.data;
	});
}