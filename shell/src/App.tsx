import React from "react";
import ReactDOM from "react-dom";

import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from "./components/ErrorFallback";

declare global {
  interface Window {
    remotes: Record<string, string>;
  }
}

const FooComponent = React.lazy(() => import('foo/Component'));
const BarComponent = React.lazy(() => import('bar/Component'));


const App = () => {

  return (
    <fieldset>
      <h1>I'm the shell - Here be some modules</h1>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <FooComponent />
        </React.Suspense>
      </ErrorBoundary>
      <br />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <BarComponent />
        </React.Suspense>
      </ErrorBoundary>
    </fieldset>
  );
}

ReactDOM.render((
  <App />
), document.getElementById("app"));
