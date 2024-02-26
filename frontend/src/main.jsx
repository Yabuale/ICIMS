import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Landing from './pages/Landing';
import './index.css';
import Root from './routes/root';
import Api from './pages/Api';
import NotFound from './pages/Notfound';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/about';
import  RegistrationClerk from './pages/RegistrationClerk'
import Police from './pages/policeDashboard'
import LocalAdmin from './pages/LocalAdmin';
import Login from './components/Login';
import ClerkRoot from './routes/clerkRoot';
import PoliceRoot from './routes/policeRoot';
import PoliceReq from './components/Police/PoliceReq';
import PostWanted from './components/Police/PostWanted';
import AdminRoot from './routes/adminRoot';
import LocalRoot from './routes/LocaladminRoot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {
     errorElement: <NotFound />,
    children: [
      { index: true, element: <Landing/> },
      {
        path: "api/",
        element: <Api />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "login/",
        element: <Login />,
      },
    ],
  },
],

  },
  {
    path:"admin/",
    element:<AdminRoot />,
    

  },
  {
    path:"clerk/",
    element:<ClerkRoot />,
    children:[
      { index: true, element: <RegistrationClerk/> },

    ],
  }
  ,{
    path:"police/",
    element:<PoliceRoot />,
    children:[
      { index: true, element: <Police/> },
      {
        path: "request/",
        element: <PoliceReq />,
      },
      {
        path: "post/",
        element: <PostWanted />,
      },

    ],

  },{
    path:"localadmin/",
    element:<LocalRoot />,
    children:[
      { index: true, element: <LocalAdmin/> },
      

    ],

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);