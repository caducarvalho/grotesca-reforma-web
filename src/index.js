import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'
import * as serviceWorker from './serviceWorker';

const bugsnagClient = bugsnag('e5baa9e53c81e957a21ae9bcadda3eab')
bugsnagClient.use(bugsnagReact, React)

ReactGA.initialize('UA-131308956-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const ErrorBoundary = bugsnagClient.getPlugin('react')

ReactDOM.render(
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorker.register();