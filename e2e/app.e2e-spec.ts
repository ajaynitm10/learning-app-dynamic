import { LearningAppPage } from './app.po';

describe('learning-app App', () => {
  let page: LearningAppPage;

  beforeEach(() => {
    page = new LearningAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
