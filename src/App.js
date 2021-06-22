import React from "react";
import EmployeeList from "./components/employeeList/index.js";
import Header from "./components/Header/index.js";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <EmployeeList />
      
    </div>
  );
}

export default App;
