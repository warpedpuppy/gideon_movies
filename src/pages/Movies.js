import React, { useEffect } from 'react'
import './Home.css';
import PageTemplate from '../components/templates/PageTemplate';
import MoviesJSON from '../json/movies.json';

const Movies = props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

	return (
		<PageTemplate subtitle='My film work explores the interplay of love and life.' xml={MoviesJSON} />
	)

}

export default Movies;
