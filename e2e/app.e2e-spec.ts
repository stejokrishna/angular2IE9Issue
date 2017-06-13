import { LazyLoadingModulesPage } from './app.po';

describe('lazy-loading-modules App', () => {
  let page: LazyLoadingModulesPage;

  beforeEach(() => {
    page = new LazyLoadingModulesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
