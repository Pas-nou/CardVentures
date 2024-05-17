import "../styles/picture.css";
function Picture({ image }) {
  return(
  <>
  <figure className="picture"><img src={image} /></figure>
  </>)
}

export default Picture;
