/* global angular */

angular.module('meanstock').directive('mhNavigation', mhNavigation);

function mhNavigation(){
	return{
		restrict: 'E',
		templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
	};
}