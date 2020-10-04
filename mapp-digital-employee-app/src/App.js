import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Header from "./components/UI/Header";
import EmployeeOverview from "./components/Employee/Overview";
import EmployeeDetails from "./components/Employee/EmployeeDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/details" exact component={EmployeeDetails} />
        <Route path="/" exact component={EmployeeOverview} />
        <Redirect to ='/'/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
