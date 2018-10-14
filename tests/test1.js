module.exports = {
  'gmail.com': function(browser){
    browser
      .url('https://gmail.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[id="identifierId"]', 'edotest30hills@gmail.com')
      .click('div[id="identifierNext"]')
      .waitForElementVisible('input[name="password"]', 1000)
      .setValue('input[name="password"]', 'edotest30Hills#')
      .click('div[id="passwordNext"]')
      .end();
  },
  'facebook.com' : function(browser){
    browser
      .url('https://facebook.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="email"]' , 'edotest30hills@gmail.com')
      .setValue('input[type="password"]' , 'edotest30hills')
      .click('input[value="Log In"]')
      .end()
  },
};