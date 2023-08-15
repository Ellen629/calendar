const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  viewportHeight: 800,
  viewportWidth: 800,
  videoCompression: false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      mainUrl:process.env.BASE_URL
    },
    testIsolation: false
  },
});
 