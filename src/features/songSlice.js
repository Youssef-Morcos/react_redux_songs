import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import songAPI from "../common/songAPI";

export const fetchAsyncNewRelease = createAsyncThunk(
    "songs/fetchAsyncNewRelease",
    async () => {
      
        const response = await songAPI.get("/playlist_tracks/?id=37i9dQZEVXbLRQDuF5jeBp&offset=0&limit=50");
      return response.data;
    }
  );

  export const fetchAsynSongByID = createAsyncThunk(
    "songs/fetchAsynSongByID",
    async (id) => {
        const response = await songAPI.get('/tracks/?ids='+ id);
      return response.data;
    }
  );

  export const fetchAsyncSearch = createAsyncThunk(
    "songs/fetchAsyncSearch",
    async (term) => {
      
      const response = await songAPI.get("/search/?q="+ term + "&type=tracks&offset=0&limit=10&numberOfTopResults=5'");
      console.log(response.data)
      return response.data;
    }
  );

 const initialState = {
    newRelease: {},
    trackByID: {},
    pics: '',
    searchedSong: {}
 };

const songSlice = createSlice ({
    name: "songs",
    initialState,
    reducers: {
      removeSongDetail: (state) => {
        state.trackByID= {};
      },
      addPicURL: (state, action) => {
        state.pics= ''+ action.payload + '';
      },
      removePicURL: (state) => {
        state.pics= '';
      },
      removeSearchedSong: (state) => {
        state.searchedSong= {};
      },
    },
    extraReducers: {
        [fetchAsyncNewRelease.pending]: () => {
          console.log("Pending");
        },
        [fetchAsyncNewRelease.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, newRelease: payload };
        },
        [fetchAsyncNewRelease.rejected]: () => {
          console.log("Rejected!");
        },
        [fetchAsynSongByID.pending]: () => {
          console.log("Pending");
        },
        [fetchAsynSongByID.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, trackByID: payload };
        },
        [fetchAsynSongByID.rejected]: () => {
          console.log("Rejected!");
        },
        [fetchAsyncSearch.pending]: () => {
          console.log("Pending");
        },
        [fetchAsyncSearch.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, searchedSong: payload };
        },
        [fetchAsyncSearch.rejected]: () => {
          console.log("Rejected!");
        },
    }

});

export const {removeSongDetail, addPicURL, removePicURL, removeSearchedSong} = songSlice.actions;
export const allNewRelease = (state) => state.songs.newRelease;
export const getSongDetail = (state) => state.songs.trackByID;
export const getPicURL = (state) => state.songs.pics;
export const getSeachedSong = (state) => state.songs.searchedSong; 
export default songSlice.reducer;
