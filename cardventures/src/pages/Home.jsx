import {images} from "../data"


function Home
(){

    console.log(images)
    return (
    <>
    <h1>coucou home</h1>
    <img src={images[1].src} alt="" />
    </>
    );
}

export default Home;