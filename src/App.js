import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

/*Component */
import Header from './pages/component/header';
import Content from "./pages/component/Content"
/*Component */

/* Styles */
import "./pages/component/styles/main.css"
/* Styles */

export default function App() {
  return (
    <div>
      <Header/>
      <main className='MainContent'>
        <Content/>
      </main>
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