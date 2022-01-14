import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({galleryList, fetchGalleryList}){
    console.log(galleryList);
    return (
        <div>
            {galleryList.map((item) => ( <GalleryItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default GalleryList;