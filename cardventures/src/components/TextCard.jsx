import "../styles/TextCard.css";

function TextCard() {
  return (
    <div className="card-text">
      <div className="champs-msg">
        <textarea
          id="message card"
          name="message card"
          rows="20"
          col="10"
          maxlength="200"
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
