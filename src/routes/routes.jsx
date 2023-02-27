import FoundStudent from "../pages/FoundStudent";
import NotFound from "../pages/NotFound";
import ResultAdd from "../pages/ResultAdd";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home");


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/result-add',
                element: <ResultAdd />
            },
            {
                path: '/found-student',
                element: <FoundStudent />
            }
        ]
    }
])

export default routes;