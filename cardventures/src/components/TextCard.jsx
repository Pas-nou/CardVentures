import "../styles/TextCard.css";

function TextCard() {
  return (
    <div className="card-text">
      <div className="text">
        <input name="lastName, firstName" placeholder="Nom Prénom" />
        <input name="adress" placeholder="Adresse" />
        <input name="message" placeholder="Message" />
        <input name="lastName, firstName, sender" placeholder="Nom Prénom Expéditeur" />
      </div>
      <button className="button"> Visualiser </button>
    </div>
  );
}

export default TextCard;
