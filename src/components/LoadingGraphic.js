import React from 'react'

export default function LoadingGraphic(props) {
    let style = {
        width: `${props.w}px`,
        height: `${props.h}px`,
        margin: `0 auto`,
        display: props.loaded ? 'none' : 'block',
        border: "1px solid black",
        backgroundColor: "blue",

        
    }
    return (
        <div style={style} className={`loading-graphic ${props.loaded}`}>
            <h1>loading. . . </h1>
        </div>
    )
}
