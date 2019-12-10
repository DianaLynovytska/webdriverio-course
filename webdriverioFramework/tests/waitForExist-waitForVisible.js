beforeEach(function() {
  browser.url("/Ajax-Loader/index.html");
})

describe('Validate whether the click me button is visible', function() {
  it('Validate whether the click me button code is visible within the DOM', function(done) {

  	var clickMeButton = '#button1 p';
  	browser.waitForExist(clickMeButton, 8000);

  });

  it('Validate whether the click me button appears once the Ajax loader fully loads', function(done) {
  
  	var clickMeButton = '#button1 p';
  	browser.waitForVisible(clickMeButton, 8000);
  });

});