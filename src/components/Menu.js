import React from 'react'
import './Menu.css';
import { withRouter, Link } from 'react-router-dom';
class Header extends React.Component {

   
    
    render () {
        return (
            <nav className="nav-wrapper">
				<div id='nav-top-band'></div>
				<div id='nav-content'>
					<img src={'/20220308/logo.png'} alt='gideon baeza logo' />
					<input className="nav-hamburger" id="sub-checkbox" type="checkbox" />
					<div className="nav-hamburger-spans sub">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="nav-links">
						<span><Link>films</Link></span>
						<span><Link>photos</Link></span>
						<span> <Link>about</Link></span>
					</div>
				</div>
            </nav>
        )
    }
    
}
export default withRouter(Header);
