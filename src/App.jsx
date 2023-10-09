import HomePage from "./components/homePage";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import ErrorPage from './components/ErrorPage.jsx';

import './styles/App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      }
    ]
  }
])

const App = () => {
 
  return (
    <>
      {/* <NavBar /> */}
      <RouterProvider
        router={router}
        />
    </>
  )
}


export default App
