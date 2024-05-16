<<<<<<< HEAD
function Footer(){
    return <h1>coucou footer</h1>
}

export default Footer;
=======
import { NavLink } from "react-router-dom";
import "../style/footer.css"

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
>>>>>>> 43214e7c3dc0646d4215ce522b49dbb730f96d3b
