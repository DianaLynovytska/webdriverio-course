describe("Description", () =>{
    beforeEach(function() {
        browser.setWindowSize(1800, 1200);
        browser.url("/IFrame/index.html");
    });

    it("Scenario", () => {
        var iframe = $("#frame");
        browser.switchToFrame(iframe);

        var findOutButton = $("#button-find-out-more");
        findOutButton.waitForDisplayed();
        findOutButton.click();

        browser.pause(5000);

        // var contactUs = $('#contact-us');
        // contactUs.click();
        // browser.execute(() => {
        //     return (document.body.style.backgroundColor = 'red');
        // })
        // var loginLink = $('#login-portal');
        // loginLink.click();

        // // console.log('Homepage header: ' + browser.getTitle())
        // // browser.pause(2000);
        // browser.switchWindow('WebDriver | Contact Us')
        // var firstName = $("input[name='first_name']");
        // firstName.waitForDisplayed();
        // firstName.addValue('Value');
        // browser.pause(2000);

        // firstName.clearValue();
        // browser.pause(2000);

        // firstName.setValue('Another value');
        // browser.pause(2000);

        // const loginPageData = browser.getUrlAndTitle();
        // expect(loginPageData.title).to.contain('Login Portal');
        // expect(loginPageData).to.contain('Login-Portal');
        // browser.pause(5000);
    });
});