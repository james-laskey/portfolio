import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import Personal from './Personal/Personal.jsx'
import Attributes from "./Attributes/Attributes.jsx";
import Portfolio from "./Portfolio/Portfolio";

export default function Layout(props){
    // const [] = useState()
    // let [] = useState()
    // useEffect(()=>{

    // }, [notifications])
    // useEffect(()=>{

    // })

    return(
        <section id='layout-portfolio'>
            <aside>
                <Personal/>
                <Attributes/>
            </aside>    
            <section id='portfolio'>
                <Portfolio/>
            </section>
        </section>
    )
}

