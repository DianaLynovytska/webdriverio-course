class ContactUs_Page {
	get firstName() { return $('[name="first_name"]');}
	get lastName() { return $('[name="last_name"]');}
	get email() { return $('[name="email"]');}
	get comments() { return $('[name="message"]');}
	get submitButton() { return $('[type="submit"]');}
	get succesfulSubmissionHeader() {return $('#contact_reply h1');}
	get unsuccesfulSubmissionHeader() {return $('body');}
  get succesfulSubmissionHeaderText() {
    return this.succesfulSubmissionHeader.getText();
  }
  get unsuccesfulSubmissionHeaderText() {
    return this.unsuccesfulSubmissionHeader.getText();
  }

   setFirstName(firstName){
    return this.firstName.setValue(firstName);

  }
   setLastName(lastName){
    return this.lastName.setValue(lastName);

  }
   setEmailAddress(email){
    return this.email.setValue(email);

  }
   setComments(comments){
  	return this.comments.setValue(comments);
  }

   clickSubmitButton(){
    return this.submitButton.click();

  }

  submitAllInformationToContactUs(firstName, lastName, email, comments) {
  	if(firstName) {
  		this.firstName.setValue(firstName);
  	}
  	if(lastName) {
  		this.lastName.setValue(lastName);
  	}
  	if(email) {
  		this.email.setValue(email);
  	}
  	if(comments) {
  		this.comments.setValue(comments);
  	}
  	this.submitButton.click();
  	// this.confirmSubmissionSuccess();
  }

  //  confirmSubmissionSuccess() {
  // 	var succesfulSubmissionHeader = '#contact_reply h1';
  //   var validateSubmissionHeader = browser.waitUntil(function (){
  //     return browser.getText(succesfulSubmissionHeader) == 'Thank You for your Message!';
  //   }, 3000)
  //   expect(validateSubmissionHeader).to.be.true;
  // }

  //  confirmSubmissionUnsuccess() {
  // 	var unsuccesfulSubmissionHeader = 'body';
  //   var validateSubmissionHeader = browser.waitUntil(function (){
  //     return browser.getText(unsuccesfulSubmissionHeader) == 'Error: all fields are required';
  //   }, 3000)
  //   expect(browser.getText(unsuccesfulSubmissionHeader)).to.be.include('Error: all fields are required');
  // }
}
module.exports = new ContactUs_Page();