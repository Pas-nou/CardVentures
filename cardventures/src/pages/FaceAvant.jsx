import { useState } from "react";
import { images } from "../data";
import Picture from "../components/Picture";
import Text from "../components/Text";
import Footer from "../components/Footer";
import "../styles/face-avant.css";
function FaceAvant() {
  const [img, setImg] = useState([]);

  const handleClic = (pict) => {
    setImg(pict);
  };

  return (
    <>
      <section className="affich-card">
        <article className="image">
          <Picture image={img} />
        </article>
        <article className="text">
          <Text messageEntrer={""} />
        </article>
      </section>
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
