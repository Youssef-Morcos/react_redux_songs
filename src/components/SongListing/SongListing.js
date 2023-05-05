import React from 'react';
import { useSelector } from 'react-redux';
import {allNewRelease, getSeachedSong} from '../../features/songSlice';
import SongCard from '../SongCard/SongCard';
import SearchedSongCard from '../SearchedSongCard/SearchedSongCard';
import './SongListing.scss'


const SongListing = () => {


    const newReleaseSongs = useSelector(allNewRelease);
    const searchedSong = useSelector(getSeachedSong);

    console.log(searchedSong);

   
    let renderSongs = 
    Object.values(searchedSong).length !== 0 ?
    ( <div>
        <h2>Your song</h2>
        <div>{searchedSong.tracks.items.map((song, index) => <SearchedSongCard key={index} data={song}/> )}</div>
        </div>
        )
    :   Object.values(newReleaseSongs).length !== 0 ? 
    ( <div> 
         <h2>Top 50 songs</h2>
        <div>{newReleaseSongs.items.map((song, index) => <SongCard key={index} data={song}/> )}</div>
        </div>
        )
    : <div>
        Loading...
    </div>

    ;


    return (
        <div className='song-list'>
           
            <div className='song-list-container'>{renderSongs}</div>
        </div>
    );
};

export default SongListing;