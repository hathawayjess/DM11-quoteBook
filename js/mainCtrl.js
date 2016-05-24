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

		$scope.removeQuote = function(quote) {
			    // remove quote from $scope.allData to update view
			    for (var i = 0; i < $scope.quotes.length; i++) {
			      if ($scope.quotes[i].text === quote) {
			        $scope.quotes.splice(i, 1);
			      }
			    }
			    // remove quote from local storage
			    dataService.removeData(quote);
		}

		
});