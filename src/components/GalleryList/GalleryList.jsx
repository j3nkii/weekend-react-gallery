function GalleryList({galleryList, fetchGalleryList}){
    console.log(galleryList);
    return (
        <div>
            {galleryList.map((item) => (
                <div key={item.id} className="gallery-item">
                    <img src={item.path} />
                    <button>love it!</button>
                    {item.likes > 0 
                        ? <p>{item.likes} people like this!</p> 
                        : <p>{item.likes} people like this :(</p>}
                </div>
            ))}
        </div>
    )
}

export default GalleryList;