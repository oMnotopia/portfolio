import HomePage from "./components/homePage";
import NavBar from "./components/NavBar";
import About from "./components/About";

import './styles/App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />
  }
])

const App = () => {
 
  return (
    <>
      <NavBar />
      <RouterProvider
        router={router}
      />
    </>
  //   <>
  //     <NavBar />
  //     <HomePage />
  //   </>
  )
}


export default App
