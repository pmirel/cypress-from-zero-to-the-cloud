const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'd38rg6',
  include: ['./node_modules/cypress', 'cypress/**/*.js'],
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
});
