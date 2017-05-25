describe ('News', function() {
  it ('shows a headline on the page', function() {
    var news = new News('Test Headline');
    expect(news.headline).toEqual('Test Headline');
  });
});



// var headline = "Milk price is on the rise, and it rhymes.";
