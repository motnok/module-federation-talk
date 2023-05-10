import React from "react";
import ReactDOM from "react-dom";

import { ErrorBoundary } from 'react-error-boundary';

import FooComponent from "foo/Component";
import BarComponent from "bar/Component";
import { ErrorFallback } from "./components/ErrorFallback";

// declare global {
//   interface Window {
//     remotes: Record<string, string>;
//   }
// }

const App = () => {

  return (
    <fieldset>
      <h1>I'm the shell - Here be some modules</h1>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <FooComponent />
      </ErrorBoundary>
      <br />
      <BarComponent />
    </fieldset>
  );
}

ReactDOM.render((
  <App />
), document.getElementById("app"));
