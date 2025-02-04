
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Mainlayout from './components/Layout/Mainlayout'
import Home from './pages/Home'
import FetchOld from './pages/FetchOld'
import FetchRQ from './pages/FetchRQ'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Mainlayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/trad",
        element: <FetchOld/>,
      },
      {
        path:"rq",
        element:<FetchRQ/>
      }
    ]
  }
])

function App() {

  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
