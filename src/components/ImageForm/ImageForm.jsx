import { useState } from 'react'

function ImageForm({submitIMG}){

    const [imgURL, setImgURL] = useState('')
    const [imgDESC, setImgDESC] = useState('')

    const onSubmit = (evt) => {
        evt.preventDefault();
        submitIMG(imgURL, imgDESC);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Image URL:
                <input onChange={evt => setImgURL(evt.target.value)} type="text" />
            </label>
            <label>
                Image Description:
                <input onChange={evt => setImgDESC(evt.target.value)} type="text" />
            </label>
            <button type="submit">Post!</button>
        </form>
    )
}
export default ImageForm;