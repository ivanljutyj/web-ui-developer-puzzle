Are there any problems or code smells in the app? (Focus on code in the libs/books folder)
Are there other improvements you would make to the app? What are they and why?


Ivan Ivanoff Notes
==================
I ran the test suite (npm run test), and produced these results:
```
Test Suites: 1 failed, 6 passed, 7 total
Tests:       2 failed, 12 passed, 14 total
Snapshots:   0 total
Time:        26.761s
```
I had 2 tests fail while running the `reading-list` suite. 

`libs/books/data-access/src/lib/+state/reading-list.reducer.spec.ts`

* Books Reducer › valid Books actions › failedAddToReadingList should undo book addition to the state
* Books Reducer › valid Books actions › failedRemoveFromReadingList should undo book removal from the state

## Solution

I resolved these errors by adding the missing reducer logic for `failedAddToReadingList` and `failedRemoveFromReadingList` to make sure that the tests pass.

Now all tests pass.

```
Test Suites: 7 passed, 7 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        19.374s
Ran all test suites.
```

Lighthouse failed in the performance category and received a score of 0 because the app took more than 30 seconds to render. The biggest thing that stook out at me was that vendor.js is 5.13mb when compiled and there is no code splitting which could help.

I ran the e2e tests and produced these results:

```
[18:36:50] I/direct - Using ChromeDriver directly...


  When: I use the reading list feature
    ✓ Then: I should see my reading list (7359ms)

  When: Use the search feature
    ✓ Then: I should be able to search books by title (6760ms)
    - Then: I should see search results as I am typing


  2 passing (14s)
  1 pending

[18:37:11] I/launcher - 0 instance(s) of WebDriver still running
[18:37:11] I/launcher - chrome #01 passed
```

It fails when trying to see results as you are typing.