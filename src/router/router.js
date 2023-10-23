import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GENERATE_TESTS, HOME, SETUP_ENV } from "./paths"
import Home from "../pages/Home"
import SetupEnv from "../pages/setupenv"
import GenerateTests from "../pages/generateTests"
const router = createBrowserRouter([
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: SETUP_ENV,
    element: <SetupEnv />,
  },
  {
    path: GENERATE_TESTS,
    element: <GenerateTests />,
  },
])

function BaseRouter() {
  return <RouterProvider router={router} />
}

export default BaseRouter
