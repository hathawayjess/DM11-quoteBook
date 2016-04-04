var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {

		$scope.quotes = dataService.getData();
		
		$scope.addQuote = function() {
			var dataObj = {
				text: $scope.quote,
				author: $scope.author
			}
			
			dataService.addData(dataObj);

			$scope.author = '';
			$scope.quote = '';
		}

		$scope.removeQuote = function(text) {
			dataService.removeData(text);
		}

		
});