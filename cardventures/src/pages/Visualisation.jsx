import Footer from "../components/Footer";

import Paiement from "../components/Paiement";
import PreviewCard from "../components/PreviewCard";
import transition from "../transition";


import "../styles/visualisation.css";

    function Visualisation() {
        return (
            <>
                <h2 className="h2-face-arriere ">Voici votre carte postale</h2>

                <section className="visualisation-preview">
                    <PreviewCard />
                </section>
                <p>
                    Si votre carte postal vous convient nous vous invitons à remplir vos information de livraison.
                </p>
                <Paiement />
                <Footer />
            </>
        );

    }

    export default transition(Visualisation);
