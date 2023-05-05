import React, {useEffect} from 'react';
import './SongDetail.scss';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {fetchAsynSongByID, removeSongDetail, getSongDetail, getPicURL} from '../../features/songSlice';
import './SongDetail.scss';



const SongDetail = () => {

    const {songID} = useParams();
    console.log(songID);

    const dispatch = useDispatch();
    const data = useSelector(getSongDetail);
    const pic = useSelector(getPicURL);
    console.log(data);

    function millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      
   

    
    useEffect(()=>{
        dispatch(fetchAsynSongByID(songID));
        
        return ()=> {
            dispatch(removeSongDetail());

        }

    }
    ,[dispatch, songID])

    return (
        <div className='song-detail'>
             {(Object.keys(data).length === 0)  ? (
        <div>...Loading</div>
      ) :  (
        <div>
            <h1>Song Info </h1>
            <div className='cover-pic'>
            <a href={pic}><img src={pic} alt='cover' /></a>
            </div>

             <div className="song-info">
              <div>
                <span>Artist  </span>
                <span>{data.tracks[0].artists[0].name}</span>
              </div>
              <div>
                <span>Album </span>
                <span>{data.tracks[0].name}</span>
              </div>
              <div>
                <span>Duration</span>
                <span>{millisToMinutesAndSeconds( ''+data.tracks[0].duration_ms +'')}</span>
              </div>
              <div>
                <span>Popularity</span>
                <span>{data.tracks[0].popularity}</span>
              </div>
              <div>
              </div>
              <a href={data.tracks[0].preview_url}>Listen to the Preview</a>

            </div>
        </div>            
      
      )}
      </div>
    );
  };
export default SongDetail;