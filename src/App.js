import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MoviePage from './pages/MoviePage';
import Footer from './components/Footer'

class App extends React.Component {

  state = {
    movieHeight: 0
  }
  setHeight = (movieHeight) => {
    this.setState({movieHeight})
  }
  render () {
    return (
      <div className="App">
        
        <Header />
          <main>
          <Switch>
              <Route exact path="/" component={Home} />
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
