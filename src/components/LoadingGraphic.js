import React from 'react'
import './LoadingGraphic.css'
export default function LoadingGraphic(props) {
    let style = {
        width: `${props.w}px`,
        height: `${props.h}px`,
        margin: `0 auto`,
        display: props.loaded ? 'none' : 'block',
        // border: "1px solid black",
       // backgroundColor: "blue",

        
    }
    return (
        <div style={style} className={`loading-graphic ${props.loaded}`}>
            <div className="loading-background">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loading-words">loading. . . </div>
        </div>
    )
}
