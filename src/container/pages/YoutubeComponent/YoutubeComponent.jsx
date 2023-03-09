import React from "react";
import './YoutubeComponent.css';

const YouTubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/33xUveRDsMo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB78IcSUTR4Ev9T58mteM-nFHS6Rw" alt=""/>
                    <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComponent.defaultProps = {
    time: "00.00",
    title: "Title Here",
    desc: "xx ditonton. x hari yang lalu"
}
export default YouTubeComponent;