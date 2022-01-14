import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({addLikes, galleryList, fetchGalleryList}){
    console.log(galleryList);
    return (
        <div>
            {galleryList.map((item) => ( <GalleryItem key={item.id} item={item} addLikes={addLikes} fetchGalleryList={fetchGalleryList}/>
            ))}
        </div>
    )
}

export default GalleryList;