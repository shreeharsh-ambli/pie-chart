import { PieChartPage } from './app.po';

describe('pie-chart App', () => {
  let page: PieChartPage;

  beforeEach(() => {
    page = new PieChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
