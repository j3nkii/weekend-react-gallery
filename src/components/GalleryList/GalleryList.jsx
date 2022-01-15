import GalleryItem from '../GalleryItem/GalleryItem'
//muistuff i hope
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    border: '1px solid black',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));








function GalleryList({addLikes, galleryList, removeIMG}){
    console.log(galleryList);
    return (
        <div>
            <Box sx={{ width: 500, minHeight: 829 }}>
                <Masonry columns={3} spacing={1}>
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