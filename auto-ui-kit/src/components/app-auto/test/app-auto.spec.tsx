import { newSpecPage } from '@stencil/core/testing';
import { AppAuto } from '../app-auto';

describe('app-auto', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppAuto],
      html: `<app-auto></app-auto>`,
    });
    expect(page.root).toEqualHtml(`
      <app-auto>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-auto>
    `);
  });
});
