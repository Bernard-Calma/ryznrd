import { pc1 } from "../../assets/images";

const Gallery = () => {
    return(
        <div className="pages_gallery" id="pages_gallery">
            <ul className="galleryList">
                <div className="galleryListItemContainer">
                    <img 
                        src={pc1}
                        alt="PC1" />
                </div>
            </ul>
        </div>
    )
}

export default Gallery;