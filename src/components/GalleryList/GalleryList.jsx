import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({addLikes, galleryList, removeIMG}){
    console.log(galleryList);
    return (
        <div>
            {galleryList.map((item) => ( 
                <GalleryItem 
                    key={item.id} 
                    item={item} 
                    addLikes={addLikes} 
                    removeIMG={removeIMG}
                />
            ))}
        </div>
    )
}

export default GalleryList;