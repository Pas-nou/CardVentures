import { useState } from "react";
import { images } from "../data";
import Picture from "../components/Picture";
import Text from "../components/Text";
import Footer from "../components/Footer";
import "../styles/face-avant.css";
function FaceAvant() {
  const min = Math.ceil(0);
  const max = Math.floor(images.length);

  const i = Math.floor(Math.random() * (max - min)) + min;
  const [img, setImg] = useState([images[i].src]);

  const handleClic = (pict) => {
    setImg(pict);
  };

  return (
    <>
      <h1 className="title-face-avant">Photographie :</h1>
      <h2>Choisissez la photo qui vous convient :</h2>
      <section className="affich-card">
        <article className="image">
          <Picture image={img} />
        </article>
        <article className="text">
          <Text
            messageEnter={
              "Dans la prochaine étape vous pourrez rédiger votre message ..."
            }
          />
        </article>
      </section>
      <div className="button-picture">
        <form action="face-arriere" method="get">
          <input type="hidden" value={img} name="picture" />
          <button type="submit">validez le choix de votre photo</button>
        </form>
      </div>
      <section>
        <article className="affich-picture">
          {images.map((value) => (
            <figure key={value.id}>
              <img
                src={value.src}
                onClick={() => {
                  handleClic(value.src);
                }}
              />
            </figure>
          ))}
        </article>
      </section>
      <Footer />
    </>
  );
}

export default FaceAvant;
