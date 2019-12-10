describe('Test Checkbox Buttons Page', function() {
	it('Should be able to focus on checkbox button elements', function(done) {

	browser.url("Dropdown-Checkboxes-RadioButtons/index.html");
	browser.click('input[type="checkbox"][value="option-1"]');
	var checkboxOne = browser.hasFocus('input[type="checkbox"][value="option-1"]');
	console.log('Check box one has a value of ' + checkboxOne);
	expect(checkboxOne, 'The checkbox 2 should have focus').to.be.true; 

	var checkboxThree = browser.hasFocus('input[type="checkbox"][value="option-3"]');
	console.log('Check box three has a value of ' + checkboxThree);
	expect(checkboxThree, 'The checkbox 3 should have focus').to.be.false; 
	});
});  