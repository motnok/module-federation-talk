import React from "react";
import ReactDOM from "react-dom";

import FooComponent from "foo/Component";
import BarComponent from "bar/Component";

// declare global {
//   interface Window {
//     remotes: Record<string, string>;
//   }
// }

const App = () => {

  return (
    <fieldset>
      <h1>I'm the shell - Here be some modules</h1>
      <FooComponent />
      <br />
      <BarComponent />
    </fieldset>
  );
}

ReactDOM.render((
  <App />
), document.getElementById("app"));
