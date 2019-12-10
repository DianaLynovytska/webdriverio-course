var config = require("../config/main-config");
var dataGenerators = require('../utils/dataGenerators');
import ContactUs_PO from  '../page-objects/ContactUs_PO';

describe("Description", () => {
  beforeEach(function() {
    browser.setWindowSize(1800, 1200);
    browser.url("./");
  });

  it("Assert URL and title", () => {
    var PageData = browser.getUrlAndTitle();
    expect(PageData.title).to.contain("WebDriverUniversity.com");
    expect(PageData.url).to.contain("webdriveruniversity.com");
  });
  it.only("Fill sumbission info", () => {
    ContactUs_PO.open();

    // var contactUs = $("#contact-us");
    // contactUs.click();
    // browser.switchWindow("WebDriver | Contact Us");
    // browser.pause(1000);

    // var firstName = $('input[name="first_name"]');
    // firstName.setValue(config.firstName);

    // var lastName = $('input[name="last_name"]');
    // lastName.setValue(config.lastName);

    // var email = $("input[name='email']");
    // email.setValue("first@test.com");

    // var message = $("[name='message']");
    // message.setValue("Some message");

    // browser.waitAndSendkeys('input[name="first_name"]',config.firstName);
    // browser.waitAndSendkeys('input[name="last_name"]',config.lastName);
    // browser.waitAndSendkeys('input[name="email"]',dataGenerators.generateRandomEmailAddress());
    // browser.waitAndSendkeys("[name='message']", dataGenerators.generateRandomString());

    ContactUs_PO.firstName.setValue(config.firstName);
    ContactUs_PO.lastName.setValue(config.lastName);
    ContactUs_PO.email.setValue(dataGenerators.generateRandomEmailAddress());
    ContactUs_PO.message.setValue(dataGenerators.generateRandomString());

    // var submitButton = $("input[type='submit']");
    // submitButton.click();

    // browser.waitAndClick("input[type='submit']");
    ContactUs_PO.submit();

    browser.waitUntil(
      () => {
        return browser.getUrl().indexOf("contact-form-thank-you") !== -1;
      },
      2000,
      "error 666"
    );

    expect(browser.getUrl()).to.contain("contact-form-thank-you");

    var thankYouMessage = $("#contact_reply h1");
    // expect(thankYouMessage.getText()).to.contain("Thank You for your Message!");
    expect(ContactUs_PO.succesfulContactHeader.getText()).to.contain("Thank You for your Message!");
  });
});
