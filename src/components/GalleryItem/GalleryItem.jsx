import {useState} from 'react'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    border: '1px solid black',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
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
        <div id="imageItem">
            <Stack key={index}>
                {isClick 
                ? <p onClick={onImageClick}>{item.description}</p>
                : <img onClick={onImageClick}
                    src={`${item.path}?w=160&auto=format`}
                    srcSet={`${item.path}?w=160&auto=format&dpr=2 2x`}
                    loading="lazy"
                    style={{ borderTopLeftRadius: 9, borderTopRightRadius: 9, border: '1px solid black',}}
                />}
                <Box sx={{width: '100%'}}>
                    <Button
                    border={0}
                        size="small"
                        variant="contained"
                        onClick={onAddLikes}
                        sx={{
                            width: '50%',
                            borderRadius: 0, 
                            borderColor: '#ff7c93', 
                            bgcolor: '#ff7c93',
                            borderLeft: '1px solid black',
                            borderRight: '1px solid black',
                            '&:hover': {
                                bgcolor: '#fd3f61'
                            }
                        }}
                    >
                        love it!
                    </Button>
                    <Button
                        border={0}
                        size="small" 
                        variant="contained"
                        onClick={onRemoveIMG} 
                        sx={{
                            width: '50%',
                            borderRadius: 0, 
                            bgcolor: '#ff5252',
                            borderRight: '1px solid black',
                            '&:hover': {
                                bgcolor: '#ff3c3c'
                            }
                        }} 
                    >
                        Delete
                    </Button>
                    </Box>
                <Label>
                    {item.likes > 0 
                        ? <p>{item.likes} people like this!</p> 
                        : <p>No people like this :(</p>}
                </Label>
            </Stack>
        </div>
    )
}
export default GalleryItem;