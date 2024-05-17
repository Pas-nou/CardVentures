import "../styles/visualisation.css";
function ECurency() {
  return (
    <>
    <h1>ICI NOUS AVONS QUITTER LE SITE ET NOUS SOMME SUR UN E-CURENCY DE PAIEMENT</h1>
      <form action="confirmation">
        <p>
          Vous avez commandé 1 carte nature et évasion 3 € frais de port 0,30€
          pour un total de 3,30€
        </p>
        <p>
          Nom du porteur de la carte<input type="text"></input>
        </p>
        <p>
          Numéro de carte banquaire<input type="text"></input>
        </p>
        <p>
          Date de validation<input type="text"></input>
        </p>
        <p>
          Numéro CSV<input type="text"></input>
        </p>
        <p>
          <button type="submit">valider le paiement</button>
        </p>
      </form>
    </>
  );
}
export default ECurency;
