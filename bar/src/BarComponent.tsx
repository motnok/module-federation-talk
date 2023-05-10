import { useState, lazy, Suspense } from "react";

export function BarComponent() {

  const [bars, setBars] = useState<string[]>([])

  const BarItem = lazy(() => import('./components/BarItem'));

  return (
    <fieldset style={{backgroundColor: 'greenyellow'}}>
      <h2>This is bar!</h2>
      <button onClick={() => setBars((prev) => [...prev, "BAR"])}>Add bar!</button>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {bars.map((bar, index) => <BarItem key={index}>{bar}</BarItem>)}
        </ul>
      </Suspense>
    </fieldset>
  );
}

export default BarComponent;
