(function() {
  'use strict';

  var headline = "Milk price is on the rise, and it rhymes.";
  var news = new News(headline);

  function returnNewsHeadline() {
    assert.isTrue(news.getHeadline() === headline);
  }

  returnNewsHeadline();

})();
