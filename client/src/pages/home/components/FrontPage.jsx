import { ryznrdLogo} from "../../../assets/images";
import { PiArrowFatLinesDownFill } from "react-icons/pi";

import { IconContext } from "react-icons";

const FrontPage = () => {
    return(
        <section className="sectionFrontPage" id="sectionFrontPage">
            <img 
                className="homePageLogo"
                src={ryznrdLogo} 
                alt="Ryznrd Logo" 
            />
            <h2>"You don't know nor any idea on what you can get? Just ask me and I'll help you out"</h2>
            <p>I can build, upgrade, setup, fix computers.</p>
            <p>Scroll down to see builds</p>
            <IconContext.Provider value={{size: "5rem"}}>
                <PiArrowFatLinesDownFill />
            </IconContext.Provider>
        </section>
    )
}

export default FrontPage