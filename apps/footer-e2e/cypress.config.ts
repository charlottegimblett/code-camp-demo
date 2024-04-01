import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run footer:serve',
        production: 'nx run footer:preview',
      },
      ciWebServerCommand: 'nx run footer:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
