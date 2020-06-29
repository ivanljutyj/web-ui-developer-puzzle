import { $, browser, ExpectedConditions } from 'protractor';
import { expect } from 'chai';

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

  it('Then: I should see the snackbar component and be able to undo adding a book', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const items = await $('[data-testing="book-item"] button');
    items.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('simple-snack-bar span'), 'Book added to reading list')
    );

    var undo = await $('snack-bar-container .mat-button');
    undo.click();

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click()

    await browser.wait(
        ExpectedConditions.textToBePresentInElement(
          $('tmo-reading-list p'),
          "You haven't added any books to your reading list yet."
        )
      );
    })
});
