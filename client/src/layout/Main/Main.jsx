import "../../assets/images/RyznrdLogo.jpg"
import AvailableBuilds from "../../pages/availableBuilds/AvailableBuilds";
import Home from "../../pages/home/Home";
import { GalleryPreview } from "../../pages/home/components";
import Services from "../../pages/services/Services";

const Main = () => {
    return(
        <main>
            <Home />
            {<Services />}
            {/* <GalleryPreview /> */}
            {/* <AvailableBuilds /> */}
        </main>
    )
}

export default Main;