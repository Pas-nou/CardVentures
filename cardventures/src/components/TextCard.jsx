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
    const { messageContext, setMessageContext } = useContext(TextContext);
    const { nameContext, setNameContext } = useContext(NameContext);
    const { addressContext, setAddressContext } = useContext(AddressContext);
    const { destContext, setDestContext } = useContext(DestContext);

    const changeMsg = (event) => {
        setMessageContext(event.target.value);
    };

    const changeDest = (event) => {
        setDestContext(event.target.value);
    };

    const changeAdress = (event) => {
        setAddressContext(event.target.value);
    };

    const changeName = (event) => {
        setNameContext(event.target.value);
    };

    return (
        <div className="card-text">
            <div className="champs-msg">
                <textarea
                    placeholder="Votre message longueure maximum de 200 carractère... "
                    id="message-card"
                    name="message card"
                    rows="15"
                    cols="50"
                    maxLength="200"
                    onChange={changeMsg}
                ></textarea>
            </div>
            <div className="champs-text">
                <input
                    className="input-text"
                    name="lastName, firstName"
                    placeholder="Nom destinataire..."
                    maxLength="25"
                    onChange={changeDest}
                />
                <input
                    className="input-text"
                    name="adress"
                    placeholder="Adresse destinataire..."
                    maxLength="70"
                    onChange={changeAdress}
                />
                <input
                    className="input-text"
                    name="lastName, firstName, sender"
                    placeholder="Nom Expéditeur..."
                    maxLength="25"
                    onChange={changeName}
                />
                <NavLink to="/visualisation">
                    <button className="button"> Visualiser </button>
                </NavLink>
            </div>
        </div>
    );
}

export default TextCard;
