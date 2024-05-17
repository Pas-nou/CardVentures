import Footer from "../components/Footer";
import PreviewCard from "../components/PreviewCard";

function Visualisation() {
    return (
        <>
            <h2 className="h2-face-arriere ">Voici votre carte postale</h2>

            <section className="visualisation-preview">
                <PreviewCard />
            </section>
            <Footer />
        </>
    );
}

export default Visualisation;
