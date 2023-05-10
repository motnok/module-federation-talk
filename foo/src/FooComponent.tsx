import { useState } from "react";

export function FooComponent() {

  const [fooed, setFooed] = useState(0)

  return (
    <fieldset style={{backgroundColor: 'salmon'}}>
      <h2>This is foo!</h2>
      <button onClick={() => setFooed((prev) => prev+1)}>Foo me up!</button>
      <p>
        Fooed up {fooed} times!
      </p>
    </fieldset>
  );
}

export default FooComponent;
