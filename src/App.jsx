import './App.css'
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import "./index.scss";


let x = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "/details/:id", element: < Details /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

function App() {

  return <RouterProvider router={x}></RouterProvider>;

}

export default App
