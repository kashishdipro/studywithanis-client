import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About Me/About Me/About";
import Contact from "../../Pages/Contact/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/aboutme',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    }
])