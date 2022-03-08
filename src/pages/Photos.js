import React, { useEffect } from 'react'
import './Home.css';
import PageTemplate from '../components/templates/PageTemplate';
import MoviesJSON from '../json/movies.json';

const Photos = props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

	return (
         <PageTemplate subtitle='Photography has given me an outlet to look at new terrain.'  xml={MoviesJSON} />
    )
    
}
export default Photos;