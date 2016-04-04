  	this.getData = function() {
  		if(localStorage.quotes) {
  			quotes = JSON.parse(localStorage.getItem('quotes'));
  		}
  		return quotes;
  	};
  	this.addData = function(obj) {
  		if (obj.hasOwnProperty('text') && obj.hasOwnProperty('author')) {
  			quotes.push(obj);
  			localStorage.setItem('quotes', JSON.stringify(quotes));
  		} else {
  			return;
  		}
  	};
  	this.removeData = function(index) {
  		quotes.splice(index, 1);
  		localStorage.setItem('quotes', JSON.stringify(quotes));
  	};

   