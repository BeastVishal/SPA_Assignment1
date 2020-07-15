(function () {
'use strict';
	// Application name
	angular.module('MyfirstAssignment', [])

	.controller('ReadText', ReadText);

	ReadText.$inject = ['$scope'];

	function ReadText($scope) {
		$scope.displaymsg = function () {
			var num = countdishes($scope.listoftext);
			$scope.message = generatemsg(num);
		};

		function countdishes(listoftext){
			var count = 0;
			if(listoftext){
				const list = listoftext.split(',');
				for (var idx in list) {
		        	if (list[idx].trim().length != 0) {
		          		count++;
		        	}
		      	}
			}
		return count;
		}

		function generatemsg(num){
			if(num === 0)
				return "Please enter data first";
			else if(num <= 3){
				return "Enjoy!";
			}
			else{
				return "Too Much!";
			}
		}
	};

})();
