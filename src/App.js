import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

/*Component */
import Header from './pages/component/header';
import Content from "./pages/component/Content"
/*Component */

export default function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}