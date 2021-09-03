import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Training from "./components/Training";
import Shopp from "./components/Shopp";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import FitnessConsultation from "./components/FitnessConsultation";
import Fitness from "./components/Fitness";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/training" exact component={Training} />{" "}
        <Route
          path="/training/fitnessConsultation"
          exact
          component={FitnessConsultation}
        />
        <Route
          path="/training/fitnessConsultation/fitness"
          component={Fitness}
        />
        <Route path="/shopp" component={Shopp} />
        <Route path="/contactUs" component={ContactUs} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>,
  rootElement
);
