import React, { Component } from 'react'
import LoadingGraphic from './LoadingGraphic';
import './Movie.css';
import Movie1 from './movies/Movie1'
export default class Movie extends Component {

    state = {
        loaded: false
    }
    loadComplete = () => {
        this.props.setLoaded(true);
    }

    render() {
       
        let loadedClass = this.props.loaded ? "loaded" : "not-loaded" ;
        return (
            <div className="movie-shell">
                <LoadingGraphic w={this.props.movie.width} h={this.props.movie.height} loaded={this.props.loaded} />
                <div className={`${loadedClass} iFrameClass`}>
                <iframe 
               
                src={this.props.movie.src}  
                title="movie 4" 
                width={this.props.movie.width}  
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
