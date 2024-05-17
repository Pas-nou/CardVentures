function Paiement() {
  return (
    <>
      <p>Entrez vos informations de livraison</p>
      <form action="e-curency">
        <p>
          Nom :<input type="text"></input>
        </p>
        <p>
          Prénom :<input type="text"></input>
        </p>
        <p>
          Adresse :<input type="textarea"></input>
        </p>
        <p>
          Code postal :<input type="text"></input>
        </p>
        <p>
          Ville :<input type="text"></input>
        </p>
        <p>
          Pays :<input type="text"></input>
        </p>
        <p className="button-visualisation">
          <button type="submit">Validez les informations de livraison</button>
        </p>
      </form>
    </>
  );
}

export default Paiement;
