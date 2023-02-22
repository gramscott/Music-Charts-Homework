import React from "react";

const Song = ({title, artist}) =>{
    console.log(title.label);
    console.log(artist);
    return (
        
            <li>
                {title.label} by {artist}
            </li>
        
    )
}


export default Song;

