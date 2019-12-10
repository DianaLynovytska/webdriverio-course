describe ('Test that the button is clickable since the Ajax loader completes loading', function(){
	it.skip('Attempt to click the button asap', function(done) {
		browser.url('/Ajax-Loader/index.html');
		browser.click('#button15555');
	});
	it('Attempt to click the button after 7 seconds', function(done) {
		browser.url('/Ajax-Loader/index.html');
		this.timeout(20000);
		browser.pause(7000);
		browser.click('#button155');
		browser.pause(7000);
	});
});