import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';
import {AiOutlineSearch} from '../../../node_modules/react-icons/ai';
import {fetchAsyncSearch} from '../../features/songSlice';
import {removeSearchedSong} from '../../features/songSlice';


const Header = () => {

    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e)=> {
        e.preventDefault();
        dispatch(fetchAsyncSearch(term));     
    }

    useEffect(() => {
        return () => {
            dispatch(removeSearchedSong());
            ;
        };
      }, [dispatch]);

    return (
        <div className='nav-bar'>
        <div className='nav-container'>
        <div className='logo'>
                <a href='/'> ALL SONGS. </a>
        </div>
            <div className='search-bar'>
            <form className="form" onSubmit={submitHandler}>
               <div> 
                <input type='text' value={term} placeholder="Find your favorite songs" onChange={(e)=> setTerm(e.target.value)} /> 
                <button type='submit'><AiOutlineSearch className='icon' /></button>
               </div>
               
            </form>
            </div>
            <div className='bar-links'>
                <a href='/'>Home</a>
                <a href='/'>Favorite songs</a>
            </div>
        </div>

        </div>
    );
};

export default Header;