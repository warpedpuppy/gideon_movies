import React, { Component } from 'react'
import './Home.css';
import PageTemplate from '../components/templates/PageTemplate';
export default class Home extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <PageTemplate subtitle='My film work explores the interplay of love and life.'/>
        )
    }
}
