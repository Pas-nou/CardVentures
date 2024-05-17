import { NavLink } from "react-router-dom";

import "../styles/footer.css";

function Footer() {
    return (
        <footer>
            <NavLink to="/">
                {" "}
                <button className="footer-btn" >accueil</button>{" "}
            </NavLink>
            <NavLink to="/face-avant">
                {" "}
                <button className="footer-btn">les images</button>{" "}
            </NavLink>
            <NavLink to="/face-arriere">
                {" "}
                <button className="footer-btn">le texte</button>{" "}
            </NavLink>
        </footer>
    );
}

export default Footer;
