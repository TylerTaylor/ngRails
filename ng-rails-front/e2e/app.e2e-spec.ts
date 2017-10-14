import { NgRailsFrontPage } from './app.po';

describe('ng-rails-front App', () => {
  let page: NgRailsFrontPage;

  beforeEach(() => {
    page = new NgRailsFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
