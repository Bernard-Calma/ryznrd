import "./styles.css"
import { GalleryPreview, FrontPage, Services } from "./components";



const Home = () => {
    return(
        <div className="pages_home">
            <FrontPage />
            <Services />
            <GalleryPreview />
        </div>
    )
}

export default Home;