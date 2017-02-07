import { TadaPage } from './app.po';

describe('tada App', function() {
  let page: TadaPage;

  beforeEach(() => {
    page = new TadaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
