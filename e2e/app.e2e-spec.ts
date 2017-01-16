import { ItemstoreNgrxPage } from './app.po';

describe('itemstore-ngrx App', function() {
  let page: ItemstoreNgrxPage;

  beforeEach(() => {
    page = new ItemstoreNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
