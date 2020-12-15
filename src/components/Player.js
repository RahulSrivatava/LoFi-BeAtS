import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay,faAngleLeft,faAngleRight,faPause } from "@fortawesome/free-solid-svg-icons"
const Player = ({
    audioRef,
    isPlaying,
    setIsPlaying,
    currentSong,
    setSongInfo,
    songInfo,
    songs,
    setCurrentSong,
    setSongs
}) => {
    const activeSonghandler = (nextPre) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPre.id) {
                return {
                    ...song,
                    active: true,
                };

            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs)
    }
    //Event Handler
    // const audioRef = useRef(null);
    const onClickHandler = () => {
        if (isPlaying)
        {
            // console.log(songInfo.animatePercentage);
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);            
        }              
        
    };
   
    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        // console.log(e.target.value);
        setSongInfo ({ ...songInfo, currentTime: e.target.value })
        // console.log(e.target.value);
    };   
    const skipTrackHandler = async(direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skipforward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            activeSonghandler(songs[(currentIndex + 1) % songs.length])
            //  console.log(direction);
        }
        else{
            if (currentIndex ===0){
        
                await setCurrentSong(songs[songs.length - 1])
                activeSonghandler(songs[songs.length - 1])
            }
            else{
                await setCurrentSong(songs[currentIndex - 1])
                activeSonghandler(songs[currentIndex - 1])            
                
            }
                
        }
        if (isPlaying) audioRef.current.play();
    };
    //Adding styles to the slider
    const trackAnimation = {
        transform: `translateX(${songInfo.animatePercentage}%)`
    };
    return ( 
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)} </p>
                <div style={{
                    background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`
                }} className="track">
                    <input
                    min={0}
                    max={songInfo.duration||0}
                    onChange={dragHandler}
                    value={songInfo.currentTime}
                    type="range"
                    />
                    <div style ={trackAnimation} className="animate"></div>
                </div>
                
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skipback')}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft} />
                <FontAwesomeIcon
                    onClick={onClickHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skipforward')}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight} />

            </div>
           
        </div>

        ) 
}
export default Player;