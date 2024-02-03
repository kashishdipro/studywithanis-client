import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact/Contact";
import About from "../../Pages/About Me/About Me/About";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Messages from "../../Pages/Dashboard/Messages/Messages";
import Subscribers from "../../Pages/Dashboard/Subscribers/Subscribers";
import AddPlaylist from "../../Pages/Dashboard/AddPlaylist/AddPlaylist";
import Playlist from "../../Pages/Dashboard/Playlist/Playlist";

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
            {
                path: '/signin',
                element: <SignIn/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute><DashboardLayout/></ProtectedRoute>,
        children: [
            {
                path: '/dashboard/messages',
                element: <Messages/>
            },
            {
                path: '/dashboard/subscribers',
                element: <Subscribers/>
            },
            {
                path: '/dashboard/playlist',
                element: <Playlist/>
            },
            {
                path: '/dashboard/addplaylist',
                element: <AddPlaylist/>
            }
        ]
    }
])