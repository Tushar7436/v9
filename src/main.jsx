import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Signup from './pages/Signup.jsx'
import { Team } from './pages/Team.jsx';
import LoginPage  from './pages/Login.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { Community } from './pages/Community.jsx';
import { Events } from './pages/Events.jsx';
import { checkOverflow } from "./debugSize";
import NotFound from "./pages/PageNotFound.jsx"
import { Toaster } from 'sonner';
import AuthContext from "./ProtectedRoutes/AuthContext.jsx";
import AdminDashboard from "./pages/Dashboard/AdminDashboard.jsx"
import PartnerDashboard from "./pages/Dashboard/PartnerDashboard.jsx"
import UserDashboard from "./pages/Dashboard/UserDashboard.jsx"


checkOverflow();

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <App/>
    </div>,
  },
  {
    path: "/Home",
    element: 
    <div>
      <App />
    </div>,
  },
  {
    path: "/About",
    element: 
    <div>
      <Navbar/>
      <AboutPage/>
    </div>,
  },
  {
    path: "/Team",
    element: 
    <div>
      <Navbar/>
      <Team/>
    </div>,
  },   
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: 
    <div>
      <LoginPage/>
    </div>,
  },
  {
    path: "/Community",
    element: 
    <div>
      <Community/>
    </div>,
  },
  {
    path: "/Events",
    element: 
    <div>
      <Events/>
    </div>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
    {
      path: "/AdminDashboard",
      element: <AdminDashboard/>
    },
    {
      path: "/PartnerDashboard",
      element: <PartnerDashboard/>
    },
    {
      path: "/UserDashboard",
      element: <UserDashboard/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
)
