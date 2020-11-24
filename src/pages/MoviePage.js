import React, { Component } from 'react'
import LoadingGraphic from '../components/LoadingGraphic';
import './MoviePage.css';
import Movies from '../json/movies.json';
import { Tabs, Tab } from 'react-bootstrap';

export default class MoviePage extends Component {

    constructor(props) {
        super(props); 
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentDidMount () {
        console.log(this.props);
       this.updateWindowDimensions();
       
    }
    state = {
        loaded: false,
        width: 0,
        height: 0,
        browserWidth: 0,
        movie: Movies[`movie${this.props.match.params.id}`]
    }
    nextMovie = (e) => {
        e.preventDefault();
        let plusOne = parseInt(this.props.match.params.id, 10) + 1;
        let newMovie = Movies[`movie${plusOne}`] ? plusOne : 1;
        this.props.history.push(`/movie-page/${newMovie}`)
        console.log(plusOne, newMovie, Movies[`movie${newMovie}`])
        this.setState({movie:  Movies[`movie${newMovie}`]});
        this.setState({loaded: false})
    }
    previousMovie = (e) => {
        e.preventDefault();
        let length = Object.keys(Movies).length;
        let minusOne = parseInt(this.props.match.params.id, 10) - 1;
        let newMovie = Movies[`movie${minusOne}`] ? minusOne : length;
        this.props.history.push(`/movie-page/${newMovie}`)
        this.setState({movie:  Movies[`movie${newMovie}`]});
        this.setState({loaded: false})
    }
    loadComplete = () => {
       this.setState({loaded: true, width: window.innerWidth, height: window.innerHeight})
    }
    updateWindowDimensions = () => {
       this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
       
        let loadedClass = this.state.loaded ? "loaded" : "not-loaded" ;
        let style  = {
            width: parseInt(this.state.width, 10) > 768 ? `${parseInt(this.state.movie.width,10)}px` : "95vw",
            height: this.state.movie.height,
            margin: "0 auto"
        }
        let style2 = {
            width: parseInt(this.state.width, 10) > 768 ? `${parseInt(this.state.movie.width,10)}px` : "auto",
        }
        return (
            <section className="movie-page-shell">
                <h2>{this.state.movie.title}</h2>
                <div className="button-div">
                    <span className="prevNext" onClick={this.previousMovie}>previous</span>
                    <span className="prevNext" onClick={this.nextMovie}>next</span>
                </div>
                <Tabs defaultActiveKey="movie" id="movie-tabs">
                <Tab eventKey="movie" title="Movie">
                    <div className="movie-shell" style={style2}>
                        <LoadingGraphic w={this.state.movie.width} h={this.state.movie.height} loaded={this.state.loaded} browserWidth={this.state.width} />
                            <iframe 
                            className="iFrameClass"
                            style={style}
                            src={this.state.movie.src}  
                            title="movie 4" 
                          
                            frameBorder="0" 
                            allow="autoplay; fullscreen" 
                            onLoad={ () => this.loadComplete() }
                            allowFullScreen></iframe>
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
