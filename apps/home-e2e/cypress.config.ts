import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run home:serve',
        production: 'nx run home:preview',
      },
      ciWebServerCommand: 'nx run home:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
