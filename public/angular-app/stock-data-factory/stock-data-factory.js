/* global angular */

angular.module('meanstock').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http) {
	return {
		stockList: stockList,
		stockDisplay: stockDisplay,
		symbolDisplay: symbolDisplay
	};


	function stockList() {
		return $http.get('/api/stocks?count=3288').then(complete).catch(failed);
	}

	function stockDisplay(id) {
		return $http.get('/api/stocks/' + id).then(complete).catch(failed);
	}
	
	function symbolDisplay(symbol) {
		return $http.get('/api/stocks/symbol' + symbol).then(complete).catch(failed);
	}

	function complete(response) {
		return response;
	}

	function failed(error) {
		console.log(error.statusText);
	}
}