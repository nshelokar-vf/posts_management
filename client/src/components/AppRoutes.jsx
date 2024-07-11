import TitleList from "../features/titles/TitleList"
import TitleDetails from "../features/titles/TitleDetails"
import React from "react"
import { Route, Routes } from "react-router-dom"

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<TitleList/>}/>
            <Route path="titles/:id" element={<TitleDetails/>}/>
            <Route path="/new" element={<h1>new title from</h1>}/>
        </Routes>
    )
}

export default AppRoutes