import "./TextCard.css";

function TextCard() {
  return (
    <div className="card-text">
      <div className="text">
        <label>
          Nom Prénom :
          <input name="lastName, firstName" />
        </label>
        <label>
          Adresse :
          <input name="adress" />
        </label>
        <label>
          Message :
          <input name="message" />
        </label>
        <label>
          Nom Prénom Expéditeur :
          <input name="lastName, firstName, sender" />
        </label>
      </div>
      <button className="button"> Visualiser </button>
    </div>
  );
}

export default TextCard;


