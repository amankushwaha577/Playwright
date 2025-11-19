// This is your main React component.
// Playwright will open this page in a real browser and check its content.

export default function Component1() {
  return (
    // Root container of the page
    <div>
      {/* 
        Heading that the user will see.
        We add data-testid="title" to make it easy for Playwright to find it.
      */}
      <h1 data-testid="title">Hello Playwright</h1>

      {/*
        Simple button.
        Again we use data-testid="btn" so Playwright can locate it
        and check that it is visible (or click it in future).
      */}
      <button data-testid="btn">Click Me</button>
    </div>
  );
}
