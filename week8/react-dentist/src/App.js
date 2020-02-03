import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  HashRouter as Router
} from 'react-router-dom'; // BrowserRouter

import Home       from './Home';
import TeethSales from './TeethSales';
import Procedures from './Procedures';
import ProceduresSearch from './ProceduresSearch';

class App extends React.Component {

  // You don't actually need a constructor() to initialise
  // state. You can use this shorthand:



  render() {

    // let pageContent;
    // if (this.state.currentPage === 'procedures') {
    //   pageContent = <Procedures />;
    // } else if ( this.state.currentPage === 'teethshop') {
    //   pageContent = <TeethSales />;
    // } else {
    //   pageContent = <p>I am a good dentist. Let me look in your mouth.</p>;
    // }

    return (
      <div className="App">
        <h1>Let Me Be Your Dentist. I insist.</h1>
        <hr />
        <Router>
          <nav>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/procedures">Procedures</Link> | &nbsp;
            <Link to="/">Contact Us</Link> | &nbsp;
            <Link to="/teethshop">Teeth Sales</Link>
            <br/>

          </nav>
          <br />
          <br />

        {
          // Like rails routes.rb:
          // get '/' => 'pages#home'
        }

          <Route exact path="/" component={ Home } />
          <Route exact path="/procedures" component={ Procedures } />
          <Route exact path="/procedures/search/:query" component={ ProceduresSearch } />
          <Route exact path="/teethshop" component={ TeethSales } />
        </Router>

        <hr />
        <footer>
          &copy; 2020 Unsettling Professionals
        </footer>
      </div>
    );
  } // render
} // class App

export default App;
