import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import FaceAvant from "./pages/FaceAvant";
import FaceArriere from "./pages/FaceArriere";
import Visualisation from "./pages/Visualisation";
import ECurency from "./pages/ECurency";
import Confirmation from "./pages/Confirmation";

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
            {
                path: "e-curency",
                element: <ECurency />,
            },
            {
                path: "confirmation",
                element: <Confirmation />,
            },
        ],
        errorElement: <h1>not found</h1>,
    },
]);

export default router;