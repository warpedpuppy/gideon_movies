import React, { Component } from 'react'
import './Home.css';
import MovieComponent from '../components/movies/MovieComponent';
import Movies from '../json/movies.json';
import HomeHeader from '../components/HomeHeader';
export default class Home extends Component {
    imageLoaded = (e) => {
        e.target.classList.add("on")
    }
    render() {
        return (
            <>
                <HomeHeader />
                <div className="home-page">
                        {
                            Object.keys(Movies).map( (item, index) => {
                                return <MovieComponent key={index} {...Movies[item]} index={ index + 1} />
                            })
                        }
                </div>
            </>
        )
    }
}
