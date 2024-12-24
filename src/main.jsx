import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Signup from './components/Authentication/Signup.jsx'
// import LandingPage from './pages/LandingPage.jsx';
import { Team } from './pages/Team.jsx';
import {Login}  from './components/Authentication/Login.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { Community } from './pages/Community.jsx';
import { Events } from './pages/Events.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar/>
      <App/>
    </div>,
  },
  {
    path: "/LandingPage",
    element: 
    <div>
      <Navbar/>
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
    element: 
    <div>
      <Navbar/>
      <Signup/>
    </div>,
  },
  {
    path: "/login",
    element: 
    <div>
      <Navbar/>
      <Login/>
    </div>,
  },
  {
    path: "/Community",
    element: 
    <div>
      <Navbar/>
      <Community/>
    </div>,
  },
  {
    path: "/Events",
    element: 
    <div>
      <Navbar/>
      <Events/>
    </div>,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
