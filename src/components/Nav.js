import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
const Nav = ({
    setLibraryStatus,
    LibraryStatus,
    currentSong,

}) => {
    
    return (
        <nav >
            <div className="logo">
            {/* <img src="public/logo.png" alt="Logo"></img> */}

            <h1>Lo-Fi BeAts</h1>
            <h5> Chill/Study/Relax</h5>
            </div>
            <button onClick={()=>setLibraryStatus(!LibraryStatus)}>
                Library
                 <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}
export default Nav;