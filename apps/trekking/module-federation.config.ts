import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'trekking',

  library: { type: 'var', name: 'trekking' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
