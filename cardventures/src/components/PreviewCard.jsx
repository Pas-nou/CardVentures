import { useContext } from "react";
import { TextContext, NameContext, AddressContext, DestContext } from "../context/Context";


import "../styles/preview-card.css";


function PreviewCard() {
    const { messageContext } = useContext(TextContext);
const { nameContext } = useContext(NameContext);
const { addressContext } = useContext(AddressContext);
const { destContext } = useContext(DestContext);


    return (
        <section className="section-preview">
            <div className="carte-preview carte-preview-l">
                <img
                    src="..\src\assets\CAPY5.webp"
                    alt=""
                    className="img-preview"
                />
            </div>

            <div className="carte-preview carte-preview-r">
                <div className="preview-msg preview-msg-l">
                    <p className="p-msg">{messageContext}</p>
                    <p className="p-name">{nameContext}</p>
                </div>
                <div className="preview-msg preview-msg-r">
                    <img
                        className="timbre"
                        src="..\src\assets\TIMBRE.webp"
                        alt="timbre"
                    />
                    <p>{destContext}</p>
                    <p className="p-addres">{addressContext}</p>
                </div>
            </div>
        </section>
    );
}

export default PreviewCard;
// {message}
