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
import ClerkAdd from './components/clerk/ClerkAdd';
import WantedTable from './components/Police/wantedList';
import CriminalList from './components/clerk/CriminalList';
import ListAccounts from './components/localAdmin/ListAccounts';
import LocalAdminList from './components/Admin/LocalAdminList';
import AddLocalAdmin from './components/Admin/AddLocalAdmin';
import AddAccount from './components/localAdmin/AddAccount';
import SearchClerk from './components/clerk/ClerkSearch';
import AddBranch from './components/Admin/AddBranch';
import ClerkRequest from './components/clerk/ClerkRequests';
import Readmore from './pages/Readmore';
import EditWanted from './components/Police/editWanted';
import ContactForm from './pages/ContactForm';
import EditAccount from './components/localAdmin/editAccount';
import EditLocalAccount from './components/Admin/editAccount';
import ClerkEdit from './components/clerk/clerkEdit';
import Reqdetail from './components/clerk/reqDetail';
import Resps from './components/Police/Resp';
import DetailResp from './components/Police/detailResp';

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
      {
        path: "readmore/:wantedId",
        element: <Readmore />,
      },
      {
        path: "resources/",
        element: <ContactForm />,
      },

    ],
  },
],

  },
  {
    path:"admin/",
    element:<AdminRoot />,
    children:[
      {
     errorElement: <NotFound />,
    children:[
      { index: true, element: <AdminDashboard/> },
      {
        path: "localadmins/",
        element: <LocalAdminList />
      },
      {
        path: "addlocaladmin/",
        element: <AddLocalAdmin />
      },
      {
        path: "addbranch/",
        element: <AddBranch />
      },
      {
        path:"edit/:accountID",
        element:<EditLocalAccount/>
      }
      
    ],
  }
]

  },




  {
    path:"clerk/",
    element:<ClerkRoot />,
    children:[
      {
     errorElement: <NotFound />,
    children:[
      { index: true, element: <RegistrationClerk/> },
      {
        path:"add/",
        element: <ClerkAdd />
      },
      {
        path:"list/",
        element: <CriminalList />
      },
      {
        path: "clerksearch/",
        element: <SearchClerk />
      },
      {
        path: "clerkrequest/",
        element: <ClerkRequest />
      },
      {
        path:"edit/:wantedId",
        element:<ClerkEdit/>
      },
      {
        path:"reqdetail/:Id",
        element:<Reqdetail/>
      }

    ],
    
  }
]
  }



  ,{
    path:"police/",
    element:<PoliceRoot />,
    children:[
      {
     errorElement: <NotFound />,
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
      {
        path: "list/",
        element: <WantedTable />,
      },
      {
        path:"edit/:wantedId",
        element:<EditWanted/>
      },{
        path:"responces",
        element:<Resps/>
      },
      {
        path:"respdetail/:Id",
        element:<DetailResp/>
      }

    ],

  }
]}
,{
    path:"localadmin/",
    element:<LocalRoot />,
    children:[
      {
     errorElement: <NotFound />,
    children:[
      { index: true, element: <LocalAdmin/> },
      {
        path: "accounts/",
        element: <ListAccounts />,
      },
      {
        path: "create/",
        element: <AddAccount />,
      },
      {
        path:"edit/:accountID",
        element:<EditAccount/>
      }
      

    ],
  }
]

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);