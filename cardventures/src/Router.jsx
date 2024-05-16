import { createBrowserRouter } from "react-router-dom";

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
                element: <Home />,
            },
            {
                path: "face-avant",
                element: <FaceAvant />,
            },
            {
                path: "face-arriere",
                element: <FaceArriere />,
            },
            {
                path: "visualisation",
                element: <Visualisation />,
            },
        ],
        errorElement: <h1>Oupsi, je crois qu'il y a une petite erreur !</h1>,
    },
]);

export default router;