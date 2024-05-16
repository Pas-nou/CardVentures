import { NavLink } from "react-router-dom";
import { images } from "../data"
import '../styles/home.css'

function Home() {

    return (

        <div className="homepage">
            <img className="logo" src='../src/assets/LOGO_V1.webp' alt="logo-cardadventure" />
            <div className="el-bottom-homepage">
                <h1 className="homepage-title">Créez votre carte postale pour des moments de déconnexion qui laisseront une trace inoubliable.</h1>
                <NavLink to='/face-avant'>
                    <button className="homepage-button">Accéder au site</button>
                </NavLink>
            </div>
        </div>

    );
}

export default Home;