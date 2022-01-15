import {useState} from 'react'
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

function GalleryItem({item, addLikes, removeIMG, index}){
    console.log('in item', item);

    const [isClick, setIsClick] = useState(false)

    const onImageClick = () =>{
        console.log('this is image', );
        setIsClick(!isClick)
    }
    const onAddLikes = () => {
        addLikes(item.likes + 1, item.id);
    }
    const onRemoveIMG = () => {
        console.log(item.id);
        removeIMG(item.id);
    }


    return (
        <Stack key={index}>
            <Label>BUTT</Label>
            {isClick 
            ? <p onClick={onImageClick}>{item.description}</p>
            : <img
                src={`${item.path}?w=250&auto=format`}
                srcSet={`${item.path}?w=250&auto=format&dpr=2 2x`}
                loading="lazy"
                style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
            />}
                    <button onClick={onAddLikes}>love it!</button>
                    <button onClick={onRemoveIMG}>Delete</button>
                    {item.likes > 0 
                        ? <p>{item.likes} people like this!</p> 
                        : <p>{item.likes} people like this :(</p>}
        </Stack>
    )
}

export default GalleryItem;