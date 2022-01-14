import {useState} from 'react'

function GalleryItem({item}){
    console.log('in item', item);

    const [isClick, setIsClick] = useState(false)

    const onImageClick = () =>{
        console.log('this is image', );
        setIsClick(!isClick)
    }

    return (
        <>
            <div className="gallery-item">
                    {isClick ? <p onClick={onImageClick}>{item.description}</p> : <img onClick={onImageClick} src={item.path} />}
                    <button>love it!</button>
                    {item.likes > 0 
                        ? <p>{item.likes} people like this!</p> 
                        : <p>{item.likes} people like this :(</p>}
                </div>
        </>
    )
}

export default GalleryItem;