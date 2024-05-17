import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import App from "./App";
import Home from "./pages/Home";
import FaceAvant from "./pages/FaceAvant";
import FaceArriere from "./pages/FaceArriere";
import Visualisation from "./pages/Visualisation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <AnimatePresence mode={'wait'}>
                    <Home />
                    </AnimatePresence>,
            },
            {
                path: "face-avant",
                element: <AnimatePresence mode={'wait'}>
                    <FaceAvant />
                    </AnimatePresence>,
            },
            {
                path: "face-arriere",
                element: <AnimatePresence mode={'wait'}><FaceArriere /></AnimatePresence>,
            },
            {
                path: "visualisation",
                element: <AnimatePresence mode={'wait'}><Visualisation /></AnimatePresence>,
            },
        ],
        errorElement: <h1>Oupsi, je crois qu'il y a une petite erreur !</h1>,
    },
]);

export default router;