import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <Header />
      <Switch>
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