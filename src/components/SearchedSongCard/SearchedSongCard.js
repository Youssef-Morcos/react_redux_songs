import React from 'react';
import { Link } from "react-router-dom";
import {addPicURL} from '../../features/songSlice'
import { useDispatch} from "react-redux";



const SearchedSongCard = (props) => {
    const { data} = props;
    const dispatch = useDispatch();
    console.log(data);


    const handlePic = (e) => {
      console.log(e.target.src);
      const pic = e.target.src;
      dispatch(addPicURL(pic))


    } 
   
  return (
    <div className="card-item" >
      <Link to={`/searchedsong/${data.data.id}`} >
        <div className="card-inner">
          <div className="card-top">
          <img src={data.data.albumOfTrack.coverArt.sources[0].url} onClick={handlePic} alt='cover' />

          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4 className='song-name' style={{textDecoration:'none'}}>{data.data.name}</h4>
              <p>{data.data.artists.items[0].profile.name}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchedSongCard;