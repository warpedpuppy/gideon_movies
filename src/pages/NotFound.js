import React, { Component } from 'react';
import './NotFound.css';
export default class NotFound extends Component {

    componentDidMount = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1 class="notFound">not found</h1>
            </div>
        )
    }
}
