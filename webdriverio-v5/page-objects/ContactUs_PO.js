import Base_PO from './Base_PO'

class ContactUs_PO extends Base_PO {
    open() {
        super.open("http://webdriveruniversity.com/Contact-Us/contactus.html");
    }
    get firstName() {
        return $('input[name="first_name"]');
    }
    get lastName() {
        return $('input[name="last_name"]');
    }
    get email() {
        return $('input[name="email"]');
    }
    get message() {
        return $("[name='message']");
    }
    get submitButton() {
        return $("input[type='submit']");
    }
    submit() {
        this.submitButton.click();
    }
    get succesfulContactHeader() {
        return $("#contact_reply h1");
    }
}
export default new ContactUs_PO()