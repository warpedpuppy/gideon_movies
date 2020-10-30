import React from 'react'
import './Background.css';
export default function Background() {
    return (
        <div className="background">
            <svg>
                <rect class="leftBack vertBox" />
                <rect class="rightBack vertBox" />
                <rect class="topBack horizBox" />
                <rect class="bottomBack horizBox" />
                
                <rect class="leftMiddle vertBox" />
                <rect class="rightMiddle vertBox" />
                <rect class="topMiddle horizBox" />
                <rect class="bottomMiddle horizBox" />
                
                <rect class="leftTop vertBox" />
                <rect class="rightTop vertBox" />
                <rect class="topTop horizBox" />
                <rect class="bottomTop horizBox" />
            </svg>
        </div>
    )
}
