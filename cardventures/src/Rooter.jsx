import { createBrowserRouter } from "react-router-dom";
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
                path: "",
                element: <Home />,
            },
            {
                path: "face-avant",
                element: <FaceAvant />,
            },
            {
                path: "faceArriere",
                element: <FaceArriere />,
            },
            {
                path: "visualisation",
                element: <Visualisation />,
            },
        ],
        errorElement: <h1>not found</h1>,
    },
]);

export default router;