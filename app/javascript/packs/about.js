import loadPolyfills from '../etherhive/load_polyfills';

require.context('../images/', true);

function loaded() {
  const TimelineContainer = require('../etherhive/containers/timeline_container').default;
  const React             = require('react');
  const ReactDOM          = require('react-dom');
  const mountNode         = document.getElementById('etherhive-timeline');

  if (mountNode !== null) {
    const props = JSON.parse(mountNode.getAttribute('data-props'));
    ReactDOM.render(<TimelineContainer {...props} />, mountNode);
  }
}

function main() {
  const ready = require('../etherhive/ready').default;
  ready(loaded);
}

loadPolyfills().then(main).catch(error => {
  console.error(error);
});
