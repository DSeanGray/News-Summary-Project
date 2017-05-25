function News(headline) {
  this.headline = headline;
}

News.prototype.returnNewsHeadline = function () {
  return this.headline;
};
