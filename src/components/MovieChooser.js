import React from 'react';
import Movie1 from './movies/Movie1';
import Movie2 from './movies/Movie2';
import Movie3 from './movies/Movie3';
import Movie4 from './movies/Movie4';

export default function MovieChooser(props) {

    if (props.id === 1) {
         return <Movie1 />
    } else if (props.id === 2) {
        return <Movie2 />
    } else if (props.id === 3) {
        return <Movie3 />
    } else  {
        return <Movie4 />
    }
   
}
