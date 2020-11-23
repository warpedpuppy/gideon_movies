import React, { Component } from 'react'
import './Home.css';
import MovieComponent from '../components/movies/MovieComponent';
import Movies from '../json/movies.json';
export default class Home extends Component {
    imageLoaded = (e) => {
        e.target.classList.add("on")
    }
    render() {
        return (
            <section className="home-div">
                <div className="background-image-mobile"></div>
                <img src="https://condescending-curie-29a045.netlify.app//bmps/background.png" alt="gideon with bruno" className="background-image" onLoad={this.imageLoaded} />
                <div className="home-text">
               
                    <p>Hi my name is Gideon and I make movies!  </p>

                    <ul>
                        {
                            Object.keys(Movies).map( (item, index) => {
                                return <li key={index}><MovieComponent {...Movies[item]} index={ index + 1} /></li>
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}
