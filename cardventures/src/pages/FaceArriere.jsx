import { useState } from "react";
import TextCard from "../components/TextCard";
import Footer from "../components/Footer";
import PreviewCard from "../components/PreviewCard";

function FaceArriere() {
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [dest, setDest] = useState("");

    return (
        <>
            <PreviewCard
                name={name}
                adress={adress}
                dest={dest}
            />
            <TextCard
                setName={setName}
                setAdress={setAdress}
                setDest={setDest}
            />
            <Footer />
        </>
    );
}

export default FaceArriere;
