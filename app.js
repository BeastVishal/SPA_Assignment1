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

		function generatemsg(listoftext){
			if(listoftext === ""){
				return "Please enter data first";
			}
			else{
			var count = 0;
			const list = listoftext.split(',');

			for (var idx in list) {
	        if (list[idx].trim().length != 0) {
	          count++;
	        	}
	      	}
			count = list.length;
			console.log(count);
			if(count == 0) return 'jkhkj';
			if(count < 4){
				return "Enjoy!";
			}
			else{
				return "To much!";
			}
			}
		};
	};

})();
