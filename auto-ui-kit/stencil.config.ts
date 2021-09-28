import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config


export const config: Config = {
  namespace: 'auto-stencil',
  srcDir: 'src',
  globalScript: 'src/global/variable.ts',
  globalStyle: 'src/global/variable.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
};
