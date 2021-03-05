import React, { useState, useRef } from "react";
import Player from "./components/Player"
import Song from "./components/Song"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


//Importing styling 
import './styles/app.scss';
//Importing utility 
import lofi from './utility'
import Library from "./components/Library";

function App() {
  const audioRef = useRef(null);

  //Adding State     
  const [songs, setSongs] = useState(lofi());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [LibraryStatus, setLibraryStatus] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animatePercentage: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // console.log(duration);
    // duration
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const animation = Math.round((roundCurrent / roundDuration) * 100);
    // console.log(animation);


    //  console.log(roundCurrent);
    setSongInfo({ ...songInfo, currentTime: current, duration, animatePercentage: animation })
  };
  const songEndhandler = async () => {

    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) audioRef.current.play();


  }
  return (
    <div className={`App ${LibraryStatus ? "library-active" : ""}`}>
      <Nav currentSong={currentSong} LibraryStatus={LibraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        LibraryStatus={LibraryStatus}
      />
      <Footer />


      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        onEnded={songEndhandler}
        src={currentSong.audio}>

      </audio>
    </div>
  );
}
export default App;
