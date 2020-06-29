import { $, browser, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });
  
  it('Then: I should be able to toggle a book status in the reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    const markAsReadToggle = await $('#mark-as-read');
    await markAsReadToggle.click();
    await browser.wait(
      ExpectedConditions.visibilityOf($('#mark-as-unread'))
    )
   
    const markAsUnreadToggle = await $('#mark-as-unread');
    await markAsUnreadToggle.click();
    await browser.wait(
      ExpectedConditions.visibilityOf($('#mark-as-read'))
    )
  }); 

});
