import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import { data } from "./data/data";
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shopping" component={ProductList} />
        <Route
          path="/product/:productName"
          component={(props) => <ProductPage {...props} data={data} />}
        />
        <Route path="/about" component={About} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

/* 
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
*/
