module.exports = {
  projects: [
    '<rootDir>/app/javascript/etherhive',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/vendor/',
    '<rootDir>/config/',
    '<rootDir>/log/',
    '<rootDir>/public/',
    '<rootDir>/tmp/',
  ],
  setupFiles: [
    'raf/polyfill',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/app/javascript/etherhive/test_setup.js',
  collectCoverageFrom: [
    'app/javascript/etherhive/**/*.js',
    '!app/javascript/etherhive/features/emoji/emoji_compressed.js',
    '!app/javascript/etherhive/locales/locale-data/*.js',
    '!app/javascript/etherhive/service_worker/entry.js',
    '!app/javascript/etherhive/test_setup.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
};
