import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import './index.css'
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
     {
      path: "/about",
      element: <><Navbar/><About/></>
    },
     {
      path: "/skill",
      element: <><Navbar/><Skill/></>
    },
     {
      path: "/project",
      element: <><Navbar/><Projects/></>
    },
     {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
      <Footer/>
    </>
  )
}

export default App
