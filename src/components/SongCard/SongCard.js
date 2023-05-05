import React from 'react';
import { Link } from "react-router-dom";
import './SongCard.scss';
import {addPicURL} from '../../features/songSlice'
import { useDispatch} from "react-redux";



const SongCard = (props) => {
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
      <Link to={`/song/${data.track.id}`} >
        <div className="card-inner">
          <div className="card-top">
          <img src={data.track.album.images[0].url} onClick={handlePic} alt='cover' />

          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4 className='song-name' style={{textDecoration:'none'}}>{data.track.name}</h4>
              <p>{data.track.artists[0].name}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SongCard;