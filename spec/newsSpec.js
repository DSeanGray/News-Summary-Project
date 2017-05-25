describe ('News', function() {
  it ('shows a headline on the page', function() {
    var news = new News('Test Headline');
    expect(news.headline).toEqual('Test Headline');
  });

  describe('returnNewsHeadline', function(){
    it('returns a news healdine', function() {
      var news = new News('Test Headline');
      expect(news.returnNewsHeadline()).toEqual('Test Headline');
    });
  });

});



// var headline = "Milk price is on the rise, and it rhymes.";
