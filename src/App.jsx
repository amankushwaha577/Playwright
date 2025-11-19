import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import './App.css';

export default function App() {
  return (
    <div>
      <div className="full-section">
        <Component1 />
      </div>

      <div className="full-section">
        <Component2 />
      </div>

      {/* Add more sections here */}
      {/* <div className="full-section">
        <Component3 />
      </div> */}
    </div>
  );
}
