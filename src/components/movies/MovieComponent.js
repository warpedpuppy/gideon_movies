import React from 'react';
import './MovieComponent.css';
import { Link } from 'react-router-dom';
export default function MovieComponent (props) {
        let { title, index  } = props;

        return (
           
            <div className="movie-module">
                
                <h2>{ title }</h2>
                <div>
                    <img src={`/bmps/movie${index}.png`} alt={`${title} thumbnail`} /> 
                    <p>Vivamus nisl ex, consectetur nec vulputate id, lobortis et tellus. Quisque venenatis volutpat diam vel sagittis. Morbi nunc nunc, bibendum eu nisl at, pulvinar egestas dolor. Mauris a libero in metus laoreet tincidunt et sit amet lacus. Vivamus feugiat condimentum blandit. Cras laoreet lorem aliquet metus venenatis hendrerit.</p>
                </div>
                <Link to={`/movie-page/${index}`}> see movie</Link>
            </div>
           
        )

}
