import { QuanTriGheModule } from './quan-tri-ghe.module';

describe('QuanTriGheModule', () => {
  let quanTriGheModule: QuanTriGheModule;

  beforeEach(() => {
    quanTriGheModule = new QuanTriGheModule();
  });

  it('should create an instance', () => {
    expect(quanTriGheModule).toBeTruthy();
  });
});
