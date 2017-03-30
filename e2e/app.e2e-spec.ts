import { AngularUsersPostsPage } from './app.po';

describe('angular-users-posts App', function() {
  let page: AngularUsersPostsPage;

  beforeEach(() => {
    page = new AngularUsersPostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
