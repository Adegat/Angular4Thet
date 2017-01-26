import { AngulerThet4Page } from './app.po';

describe('anguler-thet4 App', function() {
  let page: AngulerThet4Page;

  beforeEach(() => {
    page = new AngulerThet4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
