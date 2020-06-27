import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Contact from './containers/Contact';
import About from './containers/About';
import Post from './containers/Post';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Hero/>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/post/:postId" component={Post}/>
      
    </div>
    </Router>
  );
}

export default App;
