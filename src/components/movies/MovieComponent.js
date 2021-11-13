import React from 'react';
import './MovieComponent.css';
import { Link } from 'react-router-dom';
export default function MovieComponent (props) {
        let { title, index, thumbnail, desc  } = props;

        return (
            <div className="movie-module">
                    <Link to={`/movie-page/${index}`}>
                        <img src={`/bmps/${thumbnail}`} alt={`${title} thumbnail`} /> 
                    </Link>
                    <h3><Link to={`/movie-page/${index}`}>{ title }</Link></h3>
                    <p>{ desc }</p>
                    <Link className="movie-link" to={`/movie-page/${index}`}>see movie</Link>
            </div>
        )
}
