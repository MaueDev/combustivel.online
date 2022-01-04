import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from './pages/component/header';

export default function App() {
  return (
    <div>
      <Header/>
      <h1>Bookkeeper!</h1>
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