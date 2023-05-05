import React, {useEffect} from 'react';
import SongListing from '../SongListing/SongListing';
import { useDispatch } from 'react-redux';
import {fetchAsyncNewRelease} from '../../features/songSlice';


const Home = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncNewRelease());
  }, [dispatch]);
    return (
        <div className='home'>
            <SongListing />
        </div>
    );
};

export default Home;