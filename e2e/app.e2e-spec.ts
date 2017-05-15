import { IgGridBugPage } from './app.po';

describe('ig-grid-bug App', () => {
  let page: IgGridBugPage;

  beforeEach(() => {
    page = new IgGridBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
