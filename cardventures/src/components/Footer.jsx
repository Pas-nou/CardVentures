import { NavLink } from "react-router-dom";

import "../styles/footer.css";

function Footer() {
    return (
        <footer>
            <NavLink to="/">
                {" "}
                <button className="footer-btn" >Accueil</button>{" "}
            </NavLink>
            <NavLink to="/face-avant">
                {" "}
                <button className="footer-btn">Les images</button>{" "}
            </NavLink>
            <NavLink to="/face-arriere">
                {" "}
                <button className="footer-btn">Le texte</button>{" "}
            </NavLink>
        </footer>
    );
}

export default Footer;
