import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ImageForm({submitIMG}){

    const [imgURL, setImgURL] = useState('')
    const [imgDESC, setImgDESC] = useState('')

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('goats');
        submitIMG(imgURL, imgDESC);
        setImgDESC('');
        setImgURL('');
    }

    return (
        <>
        <h2>Submit a photo!</h2>
        <form onSubmit={onSubmit}>
            <FormControl sx={{m: 1, marginBottom: 7, minWidth: '40%'}}  >
                    <TextField onChange={evt =>(
                        setImgURL(evt.target.value))}
                        value={imgURL}
                        type="text" 
                        label="URL"
                        sx={{m: 1,  bgcolor: '#E9EBFF'}}
                    />
                    <TextField 
                        onChange={evt => setImgDESC(evt.target.value)}
                        value={imgDESC}
                        type="text" 
                        label ="Description" 
                        multiline rows={4} 
                        sx={{m: 1, fontFamily: 'Monospace', bgcolor: '#E9EBFF'}}
                    />
                <Button 
                    sx={{
                        m: 1,
                        fontFamily: 'Monospace',
                        fontWeight: 'bold',
                        color: '#000',
                        bgcolor: '#42ebcb',
                        '&:hover': {
                            bgcolor: '#11b596'
                        }
                    }} 
                    type="submit"
                    variant="contained"
                >
                    Post!
                </Button>
            </FormControl>
        </form>
        </>
    )
}
export default ImageForm;