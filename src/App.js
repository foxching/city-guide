import React from "react";
import "./styles.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Details from "./components/pages/Details";
import NotFoundPage from "./components/pages/NotFoundPage";

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/details" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
