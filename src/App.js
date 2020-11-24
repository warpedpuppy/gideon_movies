import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
// import Background from './components/Background';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import About from './pages/About';
// import Movies from './pages/Movies';
import MoviePage from './pages/MoviePage';
import Footer from './components/Footer'
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button, NavItem} from 'react-bootstrap';

class App extends React.Component {

  state = {
    movieHeight: 0
  }
  setHeight = (movieHeight) => {
    this.setState({movieHeight})
    console.log("set", movieHeight.toString())
  }
  render () {
    return (
      <div className="App">
        <Header />
          <main>
          <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/movies" component={Movies} /> */}
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              {/* <Route path="/movie-page/:id" component={MoviePage} /> */}

              <Route path="/movie-page/:id" render={ (props) => <MoviePage {...props} setHeight={this.setHeight} /> } />
              <Route component={NotFound} />
          </Switch>
          </main>
          <Footer movieHeight={this.state.movieHeight} />
      </div>
    );
  }
 
}

export default App;
