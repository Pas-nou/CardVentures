import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import '../styles/home.css'

function Home() {

    const [startAnimation, setStartAnimation] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => {
        setStartAnimation(true);
    };

    const handleAnimationComplete = () => {
        setIsHidden(true);
    };

    return (

        <div className="homepage">
            <img className="logo" src='../src/assets/LOGO_V1.webp' alt="logo-cardadventure" />
            <div className="el-bottom-homepage">
                <h1 className="homepage-title">Créez votre carte postale pour des moments de déconnexion qui laisseront une trace inoubliable.</h1>
                <div className="menu">
                    {!isHidden && (
                        <ParticleEffectButton
                            color="#F1F1D9"
                            type="triangle"
                            duration={800}
                            direction="left"
                            easing="easeOutSine"
                            particlesAmountCoefficient={4}
                            oscillationCoefficient={2}
                            hidden={startAnimation}
                            onClick={handleClick}
                            onComplete={handleAnimationComplete}
                        >
                            <button
                                className="homepage-button"
                                onClick={handleClick}
                            >
                                {/* <NavLink to='/face-avant'> */}
                                Accéder au site
                                {/* </NavLink> */}
                            </button>
                        </ParticleEffectButton>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Home;