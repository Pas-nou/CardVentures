import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {
    TextContext,
    NameContext,
    AddressContext,
    DestContext,
} from "../context/Context";
import "../styles/TextCard.css";

function TextCard() {
    // const { messageContext, setMessageContext } = useContext(TextContext);
    // const { nameContext, setNameContext } = useContext(NameContext);
    // const { addressContext, setAddressContext } = useContext(AddressContext);
    // const { destContext, setDestContext } = useContext(DestContext);

    // const changeMsg = (event) => {
    //     setMessageContext(event.target.value);
    // };

    // const changeDest = (event) => {
    //     setDestContext(event.target.value);
    // };

    // const changeAdress = (event) => {
    //     setAddressContext(event.target.value);
    // };

    // const changeName = (event) => {
    //     setNameContext(event.target.value);
    // };


    const { handleForm } = useContext(TextContext);

    return (
        <div className="card-text">
            <div className="champs-msg">
                <textarea
                    placeholder="Votre message longueure maximum de 200 carractère... "
                    id="message-card"
                    name="text"
                    rows="15"
                    cols="50"
                    maxLength="200"
                    onChange={handleForm}
                ></textarea>
            </div>
            <div className="champs-text">
                <input
                    className="input-text"
                    name="identity"
                    placeholder="Nom destinataire..."
                    maxLength="25"
                    onChange={handleForm}
                />
                <input
                    className="input-text"
                    name="address"
                    placeholder="Adresse destinataire..."
                    maxLength="70"
                    onChange={handleForm}
                />
                <input
                    className="input-text"
                    name="dest"
                    placeholder="Nom Expéditeur..."
                    maxLength="25"
                    onChange={handleForm}
                />
                <NavLink to="/visualisation">
                    <button className="button"> Visualiser </button>
                </NavLink>
            </div>
        </div>
    );
}

export default TextCard;
