import loadPolyfills from '../etherhive/load_polyfills';

loadPolyfills().then(() => {
  require('../etherhive/main').default();
}).catch(e => {
  console.error(e);
});
