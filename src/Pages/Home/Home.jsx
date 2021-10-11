import React from 'react'
import Slider from "../../components/Slider/Slider"
import Posts from "../../components/Posts/Posts"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Home.css"

export default function Home() {
    return (
        <>
         <Slider/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}
