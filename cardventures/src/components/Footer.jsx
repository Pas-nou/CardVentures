import { NavLink } from "react-router-dom";
import "../styles/footer.css"

function Footer() {
    return (
        <footer>
            <NavLink to="/" className="footer-btn">home</NavLink>
            <NavLink to="/face-avant" className="footer-btn">selecte image</NavLink>
            <NavLink to="/face-arriere" className="footer-btn">créer ton texte</NavLink>
        </footer>
    );
}

export default Footer;
