import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { GithubLoaderData } from './components/Github/Github'
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },{
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(

  createRoutesFromElements(
    <Route path=''  element={<Layout/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:userid' element={<User/>} />
      <Route loader={GithubLoaderData} path='/github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
