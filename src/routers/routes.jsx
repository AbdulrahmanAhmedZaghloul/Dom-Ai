import { createBrowserRouter } from "react-router-dom";
//  componet //  

import App from "../App";
import Register from "../pages/Register";


// Actions //




// Actions //

import registerActions from "./actions/registerActions";
import Login from "../pages/Login";
import loginActions from "./actions/loginActions";
import registerLoaders from "./loaders/registerLoaders";
import loginLoaders from "./loaders/loginLoaders";
import ResetLink from "../pages/ResetLink";
import resetLinkAction from "./actions/resetLinkAction";
import ResetPassword from "../pages/ResetPassword";
import resetLinkLoaders from "./loaders/resetLinkLoaders";
import resetPasswordLoaders from "./loaders/resetPasswordLoaders";
import appLoader from "./loaders/appLoader";
import appAction from "./actions/appAction";
import { Conversation } from "../pages/conversation";
import { conversationLoader } from "./loaders/conversationLoader";
import conversationAction from "./actions/conversationAction";
import resetPassword from "./actions/resetPassword";
import { ConversationError } from "../pages/ConversationError";
import { RootError } from "../pages/RootError";


const router = createBrowserRouter([
    { path: '/', 
        element: <App /> ,
        action:appAction,
        loader:appLoader,
        errorElement: <RootError/>, 
        children:[
            {
                path:'/:conversationId',
                element: <Conversation />,
                loader:conversationLoader,
                action: conversationAction,
                errorElement:<ConversationError/>
            }
        ]
    },
    {
        path: '/register',
        element: <Register />,
        loader:registerLoaders,
        action: registerActions
    },
    {
        path: '/login',
        element: <Login />,
        loader:loginLoaders,
        action: loginActions,
    },
    {
        path: '/reset-link',
        element: <ResetLink />,
        loader:resetLinkLoaders,
        action: resetLinkAction,
    },
    
    {
        path: '/reset-password',
        element: <ResetPassword />,
        loader:resetPasswordLoaders,
        action: resetPassword,
    },
])

export default router;