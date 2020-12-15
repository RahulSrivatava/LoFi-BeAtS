import React from "react";
const LibrarySong = ({
    audioRef,
    id,
    song,
    songs,
    setCurrentSong,
    isPlaying,
    setSongs
}) => {
    const selectHandler = async() => {
        const selectedSong = songs.filter((state) => state.id === song.id);
        console.log(selectedSong);
        await setCurrentSong(selectedSong[0]);
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };

            }else {
                return {
                    ...song,
                    active:false,
                }
            }
        })
        setSongs(newSongs);
        //checking weather the song is playing or not 
if(isPlaying) audioRef.current.play()
    
    }
    return (
        <div onClick={selectHandler} className={`library-song ${song.active?'selected':""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-describtion">
                <h3>{song.name} </h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}
export default LibrarySong;