import Footer from "../components/Footer";
import transition from "../transition";
import PreviewCard from "../components/PreviewCard";


function Visualisation() {
    return (
        <>
            <PreviewCard />
            <Footer />
        </>
    );
}

export default transition(Visualisation);
