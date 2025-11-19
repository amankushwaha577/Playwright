// A tiny counter component to practice testing with Playwright.

import { useState } from "react";

export default function Component2() {
  // React state to store the current count.
  // Initially 0.
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Heading so we know this is Component2 on the page */}
      <h1 data-testid="c2-title">Component 2 - Counter</h1>

      {/* Shows current count value */}
      <p data-testid="c2-count">Count: {count}</p>

      {/* Increments count by 1 on each click */}
      <button
        data-testid="c2-inc-btn"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      {/* Resets count back to 0 */}
      <button
        data-testid="c2-reset-btn"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
