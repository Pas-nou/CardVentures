import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import '../styles/home.css'

function Home() {

    const [startAnimation, setStartAnimation] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false)
    const navigate = useNavigate();

    const handleClick = () => {
        console.info("Button clicked")
        setStartAnimation(true);
    };

    const handleAnimationComplete = () => {
        console.info("Animation complete")
        setAnimationComplete(true);
        setIsHidden(true);
    };

    useEffect(() => {
        if (animationComplete) {
            navigate('face-avant');
        }
    }, [animationComplete, navigate])

    return (

        <div className="homepage">
            <img className="logo" src='../src/assets/LOGO_V1.webp' alt="logo-cardadventure" />
            <div className="el-bottom-homepage">
                <h1 className="homepage-title">Créez votre carte postale pour des moments de déconnexion qui laisseront une trace inoubliable.</h1>
                <div>
                    {!isHidden && (
                        <ParticleEffectButton
                            color="#F1F1D9"
                            type="triangle"
                            duration={900}
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
                                    Accéder au site
                                </button>
                        </ParticleEffectButton>
                    )}
            </div>
        </div>
        </div >

    );
}

export default Home;