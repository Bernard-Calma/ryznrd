import "./styles.css";
import Services from "./components/Services";
import { GalleryPreview } from "./components";
import FrontPage from "./components/FrontPage";



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