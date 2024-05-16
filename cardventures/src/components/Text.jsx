import { useState } from "react";
import "../styles/text.css"
function Text({messageEntrer}) {
const [message,setMessage] = useState("Lors de la prochaine étape vous rentrerez votre messages ici");




messageEntrer ? setMessage(messageEntrer): "";

console.info("message",message)
  return (<><p>{message}</p></>)
}

export default Text;
