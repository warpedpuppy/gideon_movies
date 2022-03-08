import React, { Component } from 'react'
import PageTemplate from '../components/templates/PageTemplate';
export default class Home extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <PageTemplate  subtitle='Photography has given me an outlet to look at new terrain.'/>
        )
    }
}
