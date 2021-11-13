import React, { Component } from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/">Gideon Baeza</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <span><a href='https://www.instagram.com/gideonbaeza/?hl=en'rel="noreferrer" target="_blank">Instagram</a></span>
                    <span><a href="mailto:gideonbaeza@gmail.com">gideonbaeza@gmail.com</a></span>
                    <span>207.230.9435</span>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}
