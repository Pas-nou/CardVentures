<<<<<<< HEAD
import Footer from "../compenents/Footer";

function Home
(){
    return <Footer/>
=======
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
>>>>>>> a2926b3c0f5bca65e1bc215fc391457ab95e148e
}

export default Home;