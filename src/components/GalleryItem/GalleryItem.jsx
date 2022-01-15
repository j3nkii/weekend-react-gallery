import {useState} from 'react'

function GalleryItem({item, addLikes, fetchGalleryList}){
    console.log('in item', item);

    const [isClick, setIsClick] = useState(false)

    const onImageClick = () =>{
        console.log('this is image', );
        setIsClick(!isClick)
    }
    const onAddLikes = () => {
        addLikes(item.likes + 1, item.id);
        //fetchGalleryList();
    }

    return (
        <>
            <div className="gallery-item">
                    {isClick 
                        ? <p onClick={onImageClick}>{item.description}</p> 
                        : <img onClick={onImageClick} src={item.path} height="200px" width="auto"/>}
                    <button onClick={onAddLikes}>love it!</button>
                    {item.likes > 0 
                        ? <p>{item.likes} people like this!</p> 
                        : <p>{item.likes} people like this :(</p>}
                </div>
        </>
    )
}

export default GalleryItem;