import Song from "./Song";
import React from "react";

const ChartList = ({music}) => {

    const musicItems = music.map((music, index) => {
        return <Song title={music["im:name"]} artist={music["im:artist"].label} key={index}/>
        
    })

    return (
        <>
            <ol>
                {musicItems}
            </ol>
        </>
    )
}



export default ChartList;

