describe('page', function () {
  it('should load', function () {
    browser.url('./');
    let title = browser.getTitle();

    console.log(`Page title is ${title}`);
  })
})