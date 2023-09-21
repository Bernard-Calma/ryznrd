import "./styles.css";
import { ryznrdLogo, pc1, pc2, pc3 } from "../../assets/images";


const Home = () => {
    return(
        <div className="pages_home">
            <img 
                className="homePageLogo"
                src={ryznrdLogo} 
                alt="Ryznrd Logo" 
            />
            <h2>"You don't what nor any idea on what you can get? Just ask me and I'll help you out"</h2>
            <p>I can build, upgrade, setup, fix computers.</p>

            <section className="sectionGalleryPreview">
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

                <p>See All</p>
            </section>
        </div>
    )
}

export default Home;