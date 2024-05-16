import { useContext, useState } from "react";
import TextContext from "../context/Context";
import "../styles/TextCard.css";

function TextCard() {
  const { messageContext, setMessageContext } = useContext(TextContext);
const [message, setMessage] = useState(messageContext)
  const changeMsg=(event) => {
    setMessage(event.target.value)
  }
  console.log(message)
  return (
    <div className="card-text">
      <div className="champs-msg">
        <textarea
          id="message card"
          name="message card"
          rows="20"
          col="10"
          maxLength="200"
          onChange={changeMsg}
        ></textarea>
        <button className="button"> Visualiser </button>
      </div>
      <div className="champs-text">
        <input name="lastName, firstName" placeholder="Nom Prénom" />
        <input name="adress" placeholder="Adresse" />
        <input
          name="lastName, firstName, sender"
          placeholder="Nom Prénom Expéditeur"
        />
      </div>
    </div>
  );
}

export default TextCard;
