(function(exports) {
  function newsController() {
  }

  newsController.prototype.displayNews = function () {
    var element = document.getElementById("app").innerHTML;
     element.textContent = "something about milk ";
  };

  exports.newsController = newsController;
})(this);
