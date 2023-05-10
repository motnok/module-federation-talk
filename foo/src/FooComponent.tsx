import { useState } from "react";

import isEven from 'is-even';

export function FooComponent() {

  const [fooed, setFooed] = useState(0)

  return (
    <fieldset style={{backgroundColor: 'salmon'}}>
      <h2>This is foo!</h2>
      <button onClick={() => setFooed((prev) => prev+1)}>Foo me up!</button>
      <p>
        Fooed up {fooed} times! That's an {isEven(fooed) ? 'even' : 'uneven'} number btw.
      </p>
    </fieldset>
  );
}

export default FooComponent;
