import React, { Component } from 'react'
import LoadingGraphic from '../components/LoadingGraphic';
import './MoviePage.css';
import Movies from '../json/movies.json';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class MoviePage extends Component {

    componentDidMount () {
        console.log(this.props)
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    state = {
        loaded: false,
        width: 0,
        height: 0,
        movie: Movies[`movie${this.props.match.params.id}`]
    }
    nextMovie = (e) => {
        e.preventDefault();
        let plusOne = parseInt(this.props.match.params.id, 10) + 1;
        let newMovie = Movies[`movie${plusOne}`] ? plusOne : 1;
        this.props.history.push(`/movie-page/${newMovie}`)
        console.log(plusOne, newMovie, Movies[`movie${newMovie}`])
        this.setState({movie:  Movies[`movie${newMovie}`]});

    }
    loadComplete = () => {
        this.setState({loaded: true})
        this.updateWindowDimensions();
    }
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    render() {
       
        let loadedClass = this.props.loaded ? "loaded" : "not-loaded" ;
        let style  = {
            width: this.state.width > 768 ? this.state.movie.width : "95vw",
            height: this.state.movie.height
        }
        return (
            <section className="movie-page-shell">
                <h2>{this.state.movie.title}</h2>
                <Button size="sm" variant="outline-primary" onClick={this.nextMovie}>previous movie</Button>
                <Button size="sm" variant="outline-primary" onClick={this.nextMovie}>next movie</Button>
                <Tabs defaultActiveKey="movie" id="movie-tabs">
                <Tab eventKey="movie" title="Movie">
                    <div className="movie-shell">
                        <LoadingGraphic w={this.state.movie.width} h={this.state.movie.height} loaded={this.state.loaded} />
                        <div className={`${loadedClass} iFrameClass`}>
                        <iframe 
                        style={style}
                        src={this.state.movie.src}  
                        title="movie 4" 
                        // width={this.state.movie.width}  
                        height={this.state.movie.height}   
                        frameBorder="0" 
                        allow="autoplay; fullscreen" 
                        onLoad={ () => this.loadComplete() }
                        allowFullScreen></iframe>
                        </div>
                        <p>
                            <a href={this.state.movie.vimeoLink}>{this.state.movie.title}</a> from 
                            <a href="https://vimeo.com/user38547687">Gideon Baeza</a> on <a href="https://vimeo.com">Vimeo</a>.
                        </p>
                    </div>
                </Tab>
                <Tab eventKey="details" title="Details about the movie">
                    <h1>2</h1>
                </Tab>
                </Tabs>
                
            </section>
        )
    }
}
