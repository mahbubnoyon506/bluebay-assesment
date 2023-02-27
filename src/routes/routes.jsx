import NotFound from "../pages/NotFound";

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
            }
        ]
    }
])

export default routes;