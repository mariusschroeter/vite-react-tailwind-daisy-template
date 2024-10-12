import { useState } from "react";
import "./index.css";
import Layout from "./Layout";
import {LayoutInner, LayoutInnerPadding} from "./LayoutInner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Header />
      <LayoutInnerPadding>
       <h1>Testing</h1>
      </LayoutInnerPadding>
    </Layout>
  );
}

export default App;

const Header: React.FC = () => {
  return (
    <header className="navbar bg-base-100 shadow-lg">
      <LayoutInner>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-primary">
            Modern Web Dev
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-secondary">Home</a>
            </li>
            <li>
              <a className="text-secondary">About</a>
            </li>
            <li>
              <a className="text-secondary">Contact</a>
            </li>
          </ul>
        </div>
      </LayoutInner>
    </header>
  );
};
