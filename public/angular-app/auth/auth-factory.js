/* global angular */

angular.module('meanstock').factory('AuthFactory', AuthFactory);

function AuthFactory (){
	return {
		auth: auth
	};
	
	var auth ={
		isLoggedIn: false
	};
}