import React from 'react'
import LoadingGraphic from '../LoadingGraphic';

export default function Movie4() {
    return (
        <div>
            <LoadingGraphic w="640" h="396" />
            <iframe 
            src="https://player.vimeo.com/video/447632879"  
            title="movie 4" 
            width="640" 
            height="396" 
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            onLoad={() => {console.log("loaded")}}
            allowFullScreen></iframe>
        <p>
            <a href="https://vimeo.com/447632879">Finding Our Voices Documentary</a> from 
            <a href="https://vimeo.com/user38547687">Gideon Baeza</a> on <a href="https://vimeo.com">Vimeo</a>.
        </p>
        </div>
    )
}
