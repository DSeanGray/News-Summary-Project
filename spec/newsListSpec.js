describe('NewsList', function() {

  it('stores a headline in a list', function() {
    var headline = new News('Test Headline');
    var newslist = new NewsList();
    expect(newslist.addNewsHeadline()).toContain(headline);
  });

  it('stores more than one headline in a list', function() {
    var headline = new News('Test Headline');
    var headline2 = new News('Test Headline 2');
    var newslist = new NewsList();
    expect(newslist.).addNewsHeadline(headline2);
  });

});
