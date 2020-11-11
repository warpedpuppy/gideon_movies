import React, { Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
export default class Home extends Component {
    imageLoaded = (e) => {
        e.target.classList.add("on")
    }
    render() {
        return (
            <section className="home-div">
                <img src="https://condescending-curie-29a045.netlify.app//bmps/background.png" alt="gideon with bruno" className="background-image" onLoad={this.imageLoaded} />
                <div className="home-text">
               
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque diam nibh, eu pulvinar eros tristique eu. Phasellus posuere gravida convallis.</p>

                    <ul>
                        <li> <Link to='/movie-page/1'>Candlepin</Link></li>
                        <li> <Link to='/movie-page/2'>LoveBug</Link></li>
                        <li> <Link to='/movie-page/3'>Book Arts Doc Original</Link></li>
                        <li> <Link to='/movie-page/4'>Finding Our Voices Documentary</Link></li>

                    </ul>


                    <p>Vivamus nisl ex, consectetur nec vulputate id, lobortis et tellus. Quisque venenatis volutpat diam vel sagittis. Morbi nunc nunc, bibendum eu nisl at, pulvinar egestas dolor. Mauris a libero in metus laoreet tincidunt et sit amet lacus. Vivamus feugiat condimentum blandit. Cras laoreet lorem aliquet metus venenatis hendrerit. Proin egestas turpis nec metus imperdiet hendrerit. Etiam enim risus, pretium vel auctor sed, aliquam nec diam. Nullam eu dui at massa commodo congue. Vivamus rhoncus semper imperdiet. Suspendisse pulvinar mauris at condimentum mollis. Cras ac diam eget nunc consectetur ultricies. Cras consectetur, arcu ac posuere tincidunt, dolor tellus dictum mauris, eget fermentum risus erat at turpis.</p>
                </div>
            </section>
        )
    }
}
