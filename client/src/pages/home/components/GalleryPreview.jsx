import { pc1, pc2, pc3 } from "../../../assets/images";

const GalleryPreview = () => {
    return (
        <section className="sectionGalleryPreview">
            <h1 className="sectionTitle">GALLERY PREVIEW</h1>
            <ul className="galleryPreviewList">
                <img 
                    className="galleryPreivewItemImage"
                    src={pc1}
                    alt="PC1" 
                />
                <img 
                    className="galleryPreivewItemImage"
                    src={pc2}
                    alt="PC2" 
                />
                <img 
                    className="galleryPreivewItemImage"
                    src={pc3}
                    alt="PC2" 
                />
            </ul>

            <p className="textLink">{"> See All <"}</p>
        </section>
    )
}

export default GalleryPreview