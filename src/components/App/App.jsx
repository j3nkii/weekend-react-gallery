import React from 'react';
import { useState, useEffect } from 'react';
import axios from'axios';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';



function App() {

  const [galleryList, setGalleryList] = useState([]);

  axios.get('/gallery').then(res => {
    console.log('GETTING /gallery', res.data);
    setGalleryList(res.data)
  }).catch(err => {
    console.log('ERR GETTING /gallery', err);
  })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList />
      </div>
    );
}

export default App;
