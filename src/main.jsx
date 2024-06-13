import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Frist from './pages/Frist.jsx';
import Second from './pages/Second.jsx';
import Forth from './pages/Forth.jsx';
import Third from './pages/Third.jsx';

import Five from './pages/Five.jsx';
import Sixths from './pages/Sixths.jsx';
import Seven from './pages/Seven.jsx';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path: "/",
      element: <Frist/>,
    },{
      path: "/second",
      element: <Second/>,
    },
    {
      path: "/third",
      element: <Third/>,
    },
    {
      path: "/forth",
      element: <Forth/>,
    },
    {
      path: "/five",
      element: <Five/>,
    },
    {
      path: "/six",
      element: <Sixths/>,
    },
    {
      path: "/seven",
      element: <Seven/>,
    },

  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
