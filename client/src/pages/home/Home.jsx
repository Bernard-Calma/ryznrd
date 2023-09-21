import "./styles.css";
import { ryznrdLogo, pc1 } from "../../assets/images";


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
                </ul>
            </section>
        </div>
    )
}

export default Home;