import React, { useEffect, useState } from 'react';
import ChartList from '../Components/ChartList';


const ChartContainer = () => {

    const [music, setMusic] = useState([])

    useEffect(() => {
        getMusic();
    }, [])

    const getMusic = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(music => setMusic(music.feed.entry))
    }
    return (
        <div>
        <ChartList music={music}/>
        </div>
        )
        }
        
        
        export default ChartContainer