import React from 'react'
import "./Publish.css"

export default function Publish() {
    return (
        <div className="publish">
        <img className="publishImage" src="https://www.shecancodeschool.org/images/cases/case3.jpg"/>

            <form className="publishForm">
                <div className="formGroup">
                    <label htmlFor="fileInput">
                        <i class=" plusicon fas fa-plus"></i>
                    </label>
                    <input type="file"  id="fileInput" style={{display:"none"}} />
                    <input type="text"  placeholdder="title" className="write" autoFucus={true} />

                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="tell your story...." type="text" className="write writeStory"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>

            
        </div>
    )
}

