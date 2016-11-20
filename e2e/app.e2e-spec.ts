import { FormNg2Page } from './app.po';

describe('form-ng2 App', function() {
  let page: FormNg2Page;

  beforeEach(() => {
    page = new FormNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
