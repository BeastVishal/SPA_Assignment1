(function () {
'use strict';
	// Application name
	angular.module('MyfirstAssignment', [])

	.controller('ReadText', ReadText);

	ReadText.$inject = ['$scope'];

	function ReadText($scope) {
		$scope.displaymsg = function () {
			var msg = generatemsg($scope.listoftext);
			$scope.message = msg;
		};

		function generatemsg(string){
			const list = string.split(',');
			var count = list.length;
			if(count == 0)
			{
				return "Please enter data first";
			}
			else if(count < 4){
				return "Enjoy!";
			}
			else{
				return "To much!";
			}
		};
	};

})();