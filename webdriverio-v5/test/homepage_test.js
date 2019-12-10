const assert = require('assert');

describe('Test WebdriverUni homepage', () => {
    it('Validate whether WebdriverUni homepage title is correct', () => {
        browser.url('./')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebDriverUniversity.com')
    })
})