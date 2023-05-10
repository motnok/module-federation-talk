import React, { useState } from "react";

export function BarComponent() {

  const [bars, setBars] = useState<string[]>([])

  return (
    <fieldset style={{backgroundColor: 'greenyellow'}}>
      <h2>This is bar!</h2>
      <button onClick={() => setBars((prev) => [...prev, "BAR"])}>Add bar!</button>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ul>
          {bars.map((bar, index) => <li key={index}>{bar}</li>)}
        </ul>
      </React.Suspense>
    </fieldset>
  );
}

export default BarComponent;
