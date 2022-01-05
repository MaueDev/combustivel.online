import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import Header from './pages/component/header';

export default function App() {
  return (
    <div>
      <Header/>
      <MenuCon
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