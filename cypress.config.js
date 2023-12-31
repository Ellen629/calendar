const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    env: {
      globalUrl:process.env.GLOBAL_URL,
      apiUrl: process.env.API_URL,
      baseUrl: process.env.BASE_URL
    },
  },
});