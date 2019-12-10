// var request = require('sync-request');

// browser.addCommand('submitDataContactUsForm', function (firstName, lastName, emailAddrress, comments) {
//   if(firstName){
//     browser.setValue('[name="first_name"]',firstName);
//   }
//     if(lastName){
//     browser.setValue('[name="last_name"]',lastName);
//   }
//       if(emailAddrress){
//     browser.setValue('[name="email"]',emailAddrress);
//   }
//       if(comments){
//     browser.setValue('[name="message"]',comments);
//   }
//   browser.click('[type="submit"]');
// })

var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(async () => {
  await browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUni", () => {
  // var res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');

  // var contactDetails = JSON.parse(res.getBody().toString('utf8'));

  // beforeEach(function() {
  // 	console.log('Inside the describe block!');
  // })
  // var contactDetail = contactDetails[0]
  // contactDetails.forEach(function(contactDetail){
  it("Should be able to submit a successful submission via contact us form", () => {
    ContactUs_Page.submitAllInformationToContactUs(
      "joe",
      "hoks",
      "joe_hoks@test.com",
      "my comment"
    );
    ContactUs_Page.succesfulSubmissionHeader.waitForDisplayed(3000);
    try {
      expect(ContactUs_Page.succesfulSubmissionHeaderText).to.equal(
        "Thank You for your Message!"
      );
    } catch (err) {
      console.log("Exception: " + err);
      assert.fail();
    }
  });

  // });
  // it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  //   ContactUs_Page.setFirstName('Mike');
  //   ContactUs_Page.setLastName('Woods');
  //   ContactUs_Page.setEmailAddress('woods@test.com');
  //   ContactUs_Page.clickSubmitButton();
  //   ContactUs_Page.confirmSubmissionUnsuccess();

  //   });

  // it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  //   ContactUs_Page.setFirstName('Sarah');
  //   ContactUs_Page.setEmailAddress('sarahj@test.com');
  //   ContactUs_Page.setComments('hello everyone');
  //   ContactUs_Page.clickSubmitButton();
  //   ContactUs_Page.confirmSubmissionUnsuccess();

  //   });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUs_Page.setLastName("Jomes");
    ContactUs_Page.setEmailAddress("jomes_k@test.com");
    ContactUs_Page.setComments("my note");
    ContactUs_Page.clickSubmitButton();
    expect(ContactUs_Page.unsuccesfulSubmissionHeaderText).to.have.string(
      "Error: all fields are required"
    );
    // ContactUs_Page.confirmSubmissionUnsuccess();
  });
});
