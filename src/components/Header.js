import React from 'react'
import './Header.css';
import { withRouter, Link } from 'react-router-dom';
class Header extends React.Component {

   
    
    render () {
        return (
            <nav className="nav-wrapper">
                <div className="nav-brand"><Link to='/'>Gideon Baeza</Link></div>
                <input className="nav-hamburger" id="sub-checkbox" type="checkbox" />
                <div className="nav-hamburger-spans sub">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav-links">
                    <span><a href='https://www.instagram.com/gideonbaeza/?hl=en'rel="noreferrer" target="_blank">instagram</a></span>
                    <span><a href="mailto:gideonbaeza@gmail.com" rel="noreferrer" target="_blank">gideonbaeza@gmail.com</a></span>
                    <span> <a href="tel:+12072309435" rel="noreferrer" target="_blank">207.230.9435</a></span>
                </div>
            </nav>
        )
    }
    
}
export default withRouter(Header);
