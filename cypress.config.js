const { defineConfig } = require('cypress');

module.exports = defineConfig({
  include: ['./node_modules/cypress', 'cypress/**/*.js'],
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
});
