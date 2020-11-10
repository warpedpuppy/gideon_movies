import React from 'react';
// import Movie1 from './movies/Movie1';
// import Movie2 from './movies/Movie2';
// import Movie3 from './movies/Movie3';
// import Movie4 from './movies/Movie4';
import Movie from './Movie';
import './MovieChooser.css';
import Pagination from 'react-bootstrap/Pagination';
import Movies from '../json/movies.json';

export default class MovieChooser extends React.Component {

    state = {
        movie: 1,
        movies: Movies,
        loaded: false
    }
    setLoaded = loaded => {
        this.setState({loaded})
    }
    switchMovie = (movie) => {
        this.setState({movie})
        this.setLoaded(false)
    }

    render () {
       
        let items = [];
        for (let number = 1; number <= 4; number++) {
        items.push(
            <Pagination.Item key={number} active={number === this.state.movie} onClick={ (e) => {this.switchMovie(number)}}>
                {number}
            </Pagination.Item>,
        );
        }

    
        return (
            <div className="movie-chooser">
                <Pagination>{ items }</Pagination>
                <Movie movie={this.state.movies[`movie${this.state.movie}`]} loaded={this.state.loaded} setLoaded={this.setLoaded} />
            </div>

        )
}
}

