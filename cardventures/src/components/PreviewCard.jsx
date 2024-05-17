import { useContext } from "react";
import { TextContext, NameContext, AddressContext, DestContext } from "../context/Context";
import { useLocation } from 'react-router-dom';


import "../styles/preview-card.css";


function PreviewCard() {
//     const { messageContext } = useContext(TextContext);
// const { nameContext } = useContext(NameContext);
// const { addressContext } = useContext(AddressContext);
// const { destContext } = useContext(DestContext);

const { formData } = useContext(TextContext)

const location = useLocation();
let imgClass = "timbre1";

if (location.pathname === "/face-arriere") {
    imgClass = "timbre";
} else if (location.pathname === "/page2") {
    imgClass = "timbre1";
}


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
                    <p className="p-msg">{formData.text}</p>
                    <p className="p-name">{formData.dest}</p>
                </div>
                <div className="preview-msg preview-msg-r">
                    <img
                        className={imgClass}
                        src="..\src\assets\TIMBRE.webp"
                        alt="timbre"
                    />
                    <p className="p-addres">{formData.identity}</p>
                    <p className="p-addres">{formData.address}</p>
                </div>
            </div>
        </section>
    );
}

export default PreviewCard;
// {message}
