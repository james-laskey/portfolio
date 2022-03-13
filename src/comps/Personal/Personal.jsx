import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import YearsHUD from "./YearsHUD.jsx";
import "./Personal.css"

export default function Personal(props){
    const [] = useState()
    let [] = useState()
    // useEffect(()=>{

    // }, [notifications])
    // useEffect(()=>{

    // })

    return(
        <section id='personal-wrapper'>
            <h1>James Laskey</h1>
            <section style={{display:'inline-flex', marginTop:'5%'}}>
                <div id='avi'><img src={'https://trashymedia.s3.us-east-2.amazonaws.com/assets/profilepic.jpg'}/></div>
                <YearsHUD/>
            </section>
        </section>
    )
}

