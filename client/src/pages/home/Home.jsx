import "./styles.css";
import { ryznrdLogo } from "../../assets/images";

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
        </div>
    )
}

export default Home;