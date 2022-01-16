import GalleryItem from '../GalleryItem/GalleryItem'
import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import './GalleryList.css'

function GalleryList({addLikes, galleryList, removeIMG}){
    console.log(galleryList);
    return (
        <div id="imageContainer">
            <Box sx={{ m: 'auto', maxWidth: 1100, minHeight: 829, marginBottom: 14}}>
                <Masonry columns={3} spacing={3}>
                    {galleryList.map((item, index) => ( 
                        <GalleryItem 
                            key={item.id} 
                            item={item} 
                            addLikes={addLikes} 
                            removeIMG={removeIMG}
                            index={index}
                        />
                    ))}
                </Masonry>
            </Box>
        </div>
    )
}

export default GalleryList;