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
                        sx={{m: 1}}
                    />
                    <TextField 
                        onChange={evt => setImgDESC(evt.target.value)}
                        value={imgDESC}
                        type="text" 
                        label ="Description" 
                        multiline rows={4} 
                        sx={{m: 1}}
                    />
                <Button 
                    sx={{m: 1}} 
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