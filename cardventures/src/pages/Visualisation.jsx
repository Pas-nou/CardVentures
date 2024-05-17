import Footer from "../components/Footer";
import Paiement from "../components/Paiement";
import PreviewCard from "../components/PreviewCard";

import "../styles/visualisation.css";

function Visualisation() {
  return (
    <>
      <PreviewCard />
      <p>
        Si votre carte postal vous convient nous vous invitons à remplir vos information de livraison.
      </p>
      <Paiement />
      <Footer />
    </>
  );
}

export default Visualisation;
