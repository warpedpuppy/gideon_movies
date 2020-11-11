import React, { Component } from 'react'
import './Footer.css';
import Vimeo from '../svgs/vimeo.svg';
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="https://vimeo.com/user38547687" rel="noreferrer" target="_blank"><img alt="vimeo logo" src={Vimeo} /></a>
            </footer>
        )
    }
}
