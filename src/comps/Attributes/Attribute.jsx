/*
    Display the attribute with appropiate color based on 99 scale
        0-55 - Name in lable and yellow/orange
        56-80 - Blue
        80-100 - Green
        props: {
            attrData: {
                name: String,
                rating: Integer
            }
        }
*/

import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import './Attributes.css'

function determineRatingColor(rating){
    if(rating>80){
        return 'green'
    }
    if(rating<80 && rating > 56){
        return 'blue'
    } else {
        return 'orange'
    }
}
export default function Attribute(props){
    const [attrData, setAttrData] = useState(props.attrData)
    let [attrBgColor, setAttrBgColor] = useState(determineRatingColor(attrData.rating))
    // useEffect(()=>{

    // }, [notifications])
    // useEffect(()=>{

    // })
    if(attrData.rating < 56) {
        return(
            <React.Fragment>
                <div id={attrBgColor}>
                    <p>{attrData.name}</p>
                </div>
            </React.Fragment>
        )
    } else {
        return(
            <div class='attribute'>
                <h3>{attrData.name}</h3>
                <div id={attrBgColor}>
                    <div style={{width:`${(attrData.rating /99)*100}%`, height:'0.8rem'}}>  </div>
                </div>
            </div>
        )
    }
    
}

