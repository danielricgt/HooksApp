import { Navigate, Route, Routes, Link } from "react-router"

import { UserProvider } from '../09-useContext/context/userProvider'
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./Navbar"


export const MainApp = () => {
  return (
    <UserProvider>
    
    <Navbar/>
    <hr /> 

<Routes >
    <Route  path="/" element = {<HomePage/>} />
    <Route  path="/login" element = {<LoginPage/>} />
    <Route  path="/about" element = {<AboutPage/>} />

    {/* <Route  path="/*" element = {<LoginPage />} /> */}
    <Route  path="/*"  element = {<Navigate to = "/about"/>} />
</Routes>

    </UserProvider>

  )
}
