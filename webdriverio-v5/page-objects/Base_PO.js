export default class Base_PO {
    open(path) {
        browser.url(path);
        browser.setWindowSize(1800, 1200);
    }
    waitUsingFixedTimeout(time) {
        console.log("Pausing for: " + time + " seconds");
        browser.pause(time);
    }
}