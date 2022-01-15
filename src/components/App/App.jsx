import React from 'react';
import { useState, useEffect } from 'react';
import axios from'axios';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';



function App() {
  useEffect(() => {
    fetchGalleryList();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  const fetchGalleryList = () => {
    console.log('hitting FETCH');
    axios.get('/gallery').then(res => {
      console.log('GETTING /gallery', res.data);
      setGalleryList(res.data)
    }).catch(err => {
      console.log('ERR GETTING /gallery', err);
    })
  };

  const addLikes = (data, id) => {
    console.log('hitting likes', );
    axios.put(`/gallery/like/${id}`, {likes: data}).then(res => {
      console.log('PUTTING /gallery', res);
      fetchGalleryList();
    }).catch(err => {
      console.log('ERR PUTING /gallery', err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList addLikes={addLikes} galleryList={galleryList} fetchGalleryList={fetchGalleryList}/>
      </div>
    );
}

export default App;
