beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  browser.setViewportSize({
		width: 1200,
		height: 800
	})
	browser.pause(2000);
})

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item orange is disabled therefore should return false', function(done) {
    var isEnabled = browser.isEnabled('option[value="orange"]');
    console.log('Orange = ' + isEnabled);
    expect(isEnabled).to.equal(false);
  });
  
  it('Dropdown item grape is enabled therefore should return true', function(done) {
    var isEnabled = browser.isEnabled('option[value="grape"]');
    console.log('Grape = ' + isEnabled);
    expect(isEnabled).to.equal(true);
  });
  
  it('Option2 is enabled therefore should return true', function(done) {
      browser.click('input[type="checkbox"][value="option-2"]');
      var isEnabled = browser.isEnabled('input[type="checkbox"][value="option-2"]');
      console.log('Option2 = ' + isEnabled);
      expect(isEnabled).to.equal(true);

  });
  
  it('Radio button pumpkin is enabled therefore should be true', function(done) {
      'input[type="radio"][value="pumpkin"]'
      var isEnabled = browser.isEnabled('input[type="radio"][value="pumpkin"]');
      console.log('Pumpkin = ' + isEnabled);
      expect(isEnabled).to.equal(true);
  });
  
  it('Radio button cabbage is disabled therefore should be false', function(done) {
      var isEnabled = browser.isEnabled('input[type="radio"][value="cabbage"]');
      console.log('Cabbage= ' + isEnabled);
      expect(isEnabled).to.equal(false);

  });
});