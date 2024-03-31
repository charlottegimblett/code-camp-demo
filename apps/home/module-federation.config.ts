import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'home',

  library: { type: 'var', name: 'home' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
