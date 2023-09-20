import { Navigation } from "./components";
import "./styles.css"

const Header = () => {
    return(
        <header>
            <h1 className="companyName">RYZNRD</h1>
            <Navigation />
        </header>
    )
}

export default Header;