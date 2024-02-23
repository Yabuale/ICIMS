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
import Police from './pages/Police'
import LocalAdmin from './pages/LocalAdmin';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
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
        element: <LoginForm />,
      },
    ],

  },{
    path:"admin/",
    element:<AdminDashboard />,
    errorElement:<h1>aaf</h1>

  },{
    path:"clerk/",
    element:<RegistrationClerk />,

  }
  ,{
    path:"police/",
    element:<Police />,

  },{
    path:"localadmin/",
    element:<LocalAdmin />,

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);