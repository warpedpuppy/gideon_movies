import React, { Component } from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand as={Link} to="/home">Gideon Baeza</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                <Nav.Link eventKey="1" as={Link} to="/home">Home</Nav.Link>
                <Nav.Link eventKey="1" as={Link}  to="/movies">Movies</Nav.Link>
                <Nav.Link eventKey="1" as={Link}  to="/about">About</Nav.Link>
                <Nav.Link eventKey="1" as={Link}  to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
