import React, { Component } from 'react'
import LoadingGraphic from './LoadingGraphic';
import './Movie.css';
// import Movie1 from './movies/Movie1'
export default class Movie extends Component {

    componentDidMount () {
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    state = {
        loaded: false,
        width: 0,
        height: 0
    }
    loadComplete = () => {
        this.props.setLoaded(true);
        this.updateWindowDimensions();
    }
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    render() {
       
        let loadedClass = this.props.loaded ? "loaded" : "not-loaded" ;
        let style  = {
            width: this.state.width > 768 ? this.props.movie.width : "95vw",
            height: this.props.movie.height
        }
        return (
            <div className="movie-shell">
                <LoadingGraphic w={this.props.movie.width} h={this.props.movie.height} loaded={this.props.loaded} />
                <div className={`${loadedClass} iFrameClass`}>
                <iframe 
                style={style}
                src={this.props.movie.src}  
                title="movie 4" 
                // width={this.props.movie.width}  
                 height={this.props.movie.height}   
                frameBorder="0" 
                allow="autoplay; fullscreen" 
                onLoad={() => this.loadComplete()}
                allowFullScreen></iframe>
                </div>
                <p>
                    <a href="https://vimeo.com/447632879">Finding Our Voices Documentary</a> from 
                    <a href="https://vimeo.com/user38547687">Gideon Baeza</a> on <a href="https://vimeo.com">Vimeo</a>.
                </p>
            </div>
        )
    }
}
