import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import TextContext from "../context/Context";
import "../styles/TextCard.css";

function TextCard() {
    const { messageContext, setMessageContext } = useContext(TextContext);
    const [message, setMessage] = useState("messageContext");
    console.log("%c⧭", "color: #ff0000", messageContext);
    const changeMsg = (event) => {
        setMessageContext(event.target.value);
        setMessage(event.target.value);
    };
    console.log(message);
    return (
        <div className="card-text">
            <div className="champs-msg">
                <textarea
                    placeholder="Votre message longueure maximum de 200 carractère "
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
                    placeholder="Nom & Prénom dest."
                    maxLength="25"

                />
                <input
                    className="input-text"
                    name="adress"
                    placeholder="Adresse"
                    maxLength="70"

                />
                <input
                    className="input-text"
                    name="lastName, firstName, sender"
                    placeholder="Nom & Prénom Expé."
                    maxLength="25"

                />
                <NavLink to="/visualisation">
                    <button className="button"> Visualiser </button>
                </NavLink>
            </div>
        </div>
    );
}

export default TextCard;
