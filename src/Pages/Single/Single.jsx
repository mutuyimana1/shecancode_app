import React from 'react'
import "./Single.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/singlePost/singlePost'
export default function Single() {
    return (
        <div className="single">
            <SinglePost/>

            <Sidebar/>
        </div>
    )
}
