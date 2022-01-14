function GalleryItem({item}){
    console.log('in item', item);
    return (
        <>
            <div className="gallery-item">
                    <img src={item.path} />
                    <button>love it!</button>
                    {item.likes > 0 
                        ? <p>{item.likes} people like this!</p> 
                        : <p>{item.likes} people like this :(</p>}
                </div>
        </>
    )
}

export default GalleryItem;