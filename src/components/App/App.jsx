import React from 'react';
import { useState, useEffect } from 'react';
import axios from'axios';
import GalleryList from '../GalleryList/GalleryList'
import ImageForm from '../ImageForm/ImageForm'
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
      console.error('ERR GETTING /gallery', err);
    })
  };

  const addLikes = (data, id) => {
    console.log('hitting likes', );
    axios.put(`/gallery/like/${id}`, {
      likes: data
    }).then(res => {
      console.log('PUTTING /gallery', res);
      fetchGalleryList();
    }).catch(err => {
      console.error('ERR PUTING /gallery', err);
    })
  }

  const submitIMG = (url, desc) => {
    console.log('hitting submit', url, desc);
    axios.post('/gallery', {
      path: url,
      description: desc 
    }).then(res => {
      console.log('POST /gallery:', res);
      fetchGalleryList();
    }).catch(err => {
      console.error('POST FAILED /gallery', err);
    })
  }

  const removeIMG = (id) => {
    axios.delete(`/gallery/${id}`).then(res => {
      console.log('DELETE SUCC', res);
      fetchGalleryList();
    }).catch(err => {
      console.log('ERR in Delete', err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <ImageForm submitIMG={submitIMG} />
        <GalleryList addLikes={addLikes} galleryList={galleryList} removeIMG={removeIMG}/>
      </div>
    );
}

export default App;
