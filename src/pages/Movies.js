import React, { Component } from 'react'
import MovieChooser from '../components/MovieChooser';
export default class Movies extends Component {
    render() {
        return (
            <div>
                <MovieChooser id={2} />
            </div>
        )
    }
}
