import React from 'react'
import Mainscreen from './screens/Mainscreen'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router' // keeping same as your project
import Details from './screens/Details'

const App = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      {/* top bar (14) + category bar (~34px) => ~94px */}
      <div className="pt-[94px] md:ml-60 bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Mainscreen />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  )
}

export default App
