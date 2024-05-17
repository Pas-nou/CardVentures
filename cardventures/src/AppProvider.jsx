import { useState } from 'react';
// import { TextContext, NameContext, AddressContext, DestContext } from './context/Context';
import { TextContext } from './context/Context';

const AppProvider = ({ children }) => {
  // const [messageContext, setMessageContext] = useState("");
  // const [nameContext, setNameContext] = useState("");
  // const [addressContext, setAddressContext] = useState("");
  // const [destContext, setDestContext] = useState("");

  const [formData, setFormData] = useState({
    text: "",
    identity: "",
    address: "",
    dest: ""
  });

  function handleForm(e) {
    setFormData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  return (
    <TextContext.Provider value={{ formData, handleForm }}>
      {children}
    </TextContext.Provider>
  )



//   return (
//     <TextContext.Provider value={{ messageContext, setMessageContext }}>
//       <NameContext.Provider value={{ nameContext, setNameContext }}>
//         <AddressContext.Provider value={{ addressContext, setAddressContext }}>
//           <DestContext.Provider value={{ destContext, setDestContext }}>
//             {children}
//           </DestContext.Provider>
//         </AddressContext.Provider>
//       </NameContext.Provider>
//     </TextContext.Provider>
//   );
// };
}

export default AppProvider;
