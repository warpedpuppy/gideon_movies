import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    imageLoaded = (e) => {
        e.target.classList.add("on")
    }
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render() {
		let obj = {backgroundImage: `url('/gideon.jpg')`}
        return (
            <>
                <div className="home-page">
                        <div id='home-page-background' style={obj}></div>
						<div id='home-page-text'>
							<p>I hate fucking boring bios and shit like that.</p>
							<p>I am a filmmaker.</p>
							<div id='home-page-photo-credit'>Hometown Camden, Maine. Photo by Darcy Aders</div>
						</div>
						
                </div>
            </>
        )
    }
}
