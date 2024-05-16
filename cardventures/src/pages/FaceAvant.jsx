import Picture from "../components/Picture";
import Text from "../components/Text";
import Footer from "../components/Footer";
import "../styles/face-avant.css"
function FaceAvant() {
  const picture = [
    "/image/image1.jpg",
    "/image/image2.jpg",
    "/image/image3.jpg",
    "/image/image4.jpg",
    "/image/image5.jpg",
    "/image/image6.jpg",
    "/image/image7.jpg",
    "/image/image8.jpg",
    "/image/image9.jpg",
    "/image/image10.jpg",
    "/image/image11.jpg",
    "/image/image12.jpg",
    "/image/image13.jpg",
    "/image/image14.jpg",
    "/image/image15.jpg",
    "/image/image16.jpg",
  ];

  return (
    <>
      <Picture />
      <Text />
      <div className="picture">
      {picture.map((value) => (
        <p key={value}><img src={value} /></p>
      ))}
      </div>
      <Footer />
    </>
  );
}

export default FaceAvant;
