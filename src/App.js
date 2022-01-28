import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPage from "Pages/LandingPage";
import Example from "Pages/Example";
import DetailsPage from "Pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
