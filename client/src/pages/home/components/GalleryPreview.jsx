import { pcData } from "../../../db/pcData";
import PreviewToolTip from "./PreviewTooltip";

const GalleryPreview = () => {
    return (
        <section className="sectionGalleryPreview" id="sectionGalleryPreview">
            <h1 className="sectionTitle">PREVIOUS BUILDS </h1>
            <ul className="galleryPreviewList">
                {
                    pcData.map(pc => 
                        <div className="previewListItem" key={pc.name}>
                            <img 
                                className="galleryPreivewItemImage"
                                src={pc.img}
                                alt="PC1" 
                            />
                            <PreviewToolTip pc = {pc}/>
                        </div>
                    )
                }

                {/* <div className="previewListItem">
                    <img 
                        className="galleryPreivewItemImage"
                        src={pc2}
                        alt="PC2" 
                    />
                    <PreviewToolTip />
                </div>

                <div className="previewListItem">
                    <img 
                        className="galleryPreivewItemImage"
                        src={pc3}
                        alt="PC2" 
                    />
                    <PreviewToolTip />
                </div> */}
                
                
                
            </ul>

            <p className="textLink">{"> See All <"}</p>
        </section>
    )
}

export default GalleryPreview