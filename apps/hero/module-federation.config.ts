import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'hero',

  library: { type: 'var', name: 'hero' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
