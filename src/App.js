import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Portfolio from './components/Portofolio/Portfolio'

export default function App() {
 let routes= createBrowserRouter([
    {path: "/", element:<Layout/>, children: [
      {path: "Home", element:<Home/>},
      {path: "Contacts", element:<Contacts/>},
      {path: "Portfolio", element:<Portfolio/>},
      {path: "About", element:<About/>},
      {path: "*", element:<About/>},
    ]},
  ])
  return (
    <div>

      <RouterProvider router={ routes  }/>
    </div>
  )
}
