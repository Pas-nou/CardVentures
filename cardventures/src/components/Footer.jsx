import { NavLink } from "react-router-dom";
import "../style/footer.css"

function Footer() {
    return (
        <footer>
            <NavLink to="/">home</NavLink>
            <NavLink to="/face-avant">page 1</NavLink>
            <NavLink to="/face-arriere">page 2</NavLink>
        </footer>
    );
}

export default Footer;
