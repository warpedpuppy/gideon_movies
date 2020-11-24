import React, { Component } from 'react'
import './Footer.css';
import Vimeo from '../svgs/vimeo.svg';
export default class Footer extends Component {
    render() {
        let iframeHeight = document.getElementById("iframe") ? document.getElementById("iframe").clientHeight : 0 ;
        let height = Math.max(iframeHeight, this.props.movieHeight) + 100;
        let footerStyle = {
            marginTop: `${height}px`
        }
        return (
            <footer style={footerStyle}>
                <a href="https://vimeo.com/user38547687" rel="noreferrer" target="_blank"><img alt="vimeo logo" src={Vimeo} /></a>
            </footer>
        )
    }
}
