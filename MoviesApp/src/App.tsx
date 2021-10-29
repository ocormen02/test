import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Table from "./components/table";

function App() {
  return (
    <Router>
      <div>
        <Table></Table>
      </div>
    </Router>
  )
}

export default App;
