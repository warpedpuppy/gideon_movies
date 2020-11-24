import React from 'react'
import './LoadingGraphic.css'
export default function LoadingGraphic(props) {
    let style = {
        width: props.w,
        height: props.h,
        margin: `0 auto`,
        display: props.loaded ? 'none' : 'block',
        // opacity: props.loaded ? '0' : '1'
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
