import { useState } from "react";
import { BarItem } from "./components/BarItem";

export function BarComponent() {

  const [bars, setBars] = useState<string[]>([])

  return (
    <fieldset style={{backgroundColor: 'greenyellow'}}>
      <h2>This is bar!</h2>
      <button onClick={() => setBars((prev) => [...prev, "BAR"])}>Add bar!</button>
        <ul>
          {bars.map((bar, index) => <BarItem key={index}>{bar}</BarItem>)}
        </ul>
    </fieldset>
  );
}

export default BarComponent;
