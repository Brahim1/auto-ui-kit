import { newE2EPage } from '@stencil/core/testing';

describe('app-auto', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-auto></app-auto>');

    const element = await page.find('app-auto');
    expect(element).toHaveClass('hydrated');
  });
});
