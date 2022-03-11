/*
    Responsible for order attributes in proper order and displaying strongest skills in proper order
*/
import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import Attribute from './Attribute.jsx'
import './Attributes.css'
let attributes = [
    {
        name: 'JavaScript',
        rating: 95
    },
    {
        name: 'React.js',
        rating: 90
    },
    {
        name: 'HTML/CSS',
        rating: 90
    },
    {
        name: 'Python',
        rating: 85
    },
    {
        name: 'SQL',
        rating: 79
    },
    {
        name: 'AWS',
        rating: 55
    },
    {
        name: 'UI/UX Design',
        rating: 75
    },
    {
        name: 'Microservices',
        rating: 40
    },
    {
        name: 'Unit Testing',
        rating: 60
    },


]
function insertionSort(arrOfObjs){
    for (let attrIdx = 0; attrIdx<arrOfObjs.length;attrIdx++){
        const currValue = arrOfObjs[attrIdx]
        let previousValue = attrIdx-1
        while ( previousValue>=0 && arrOfObjs[previousValue].rating<currValue.rating){
            arrOfObjs[previousValue+1] = arrOfObjs[previousValue]
            previousValue-=1
        }
        arrOfObjs[previousValue+1] = currValue
    }
    return arrOfObjs
}
export default function Attributes(props){
    const [orderedAttrs, setAttrs] = useState(insertionSort(attributes))
    let [] = useState()
    useEffect(()=>{
        console.log(orderedAttrs)
        if(orderedAttrs){
            let toRender = []
            orderedAttrs.map((attr)=>{
                const skill = <Attribute attrData={attr}/>
                toRender.push(skill)
            })
            function RenderAtributes(props){
                return(
                    <React.Fragment>
                        {props.skills}
                    </React.Fragment>
                )
            }
            ReactDOM.render(<RenderAtributes skills={toRender}/>, document.getElementById('attrs-selector'))
        }
    }, [orderedAttrs])
    useEffect(()=>{

    })

    return(
        <section id='attrs-selector'>
        </section>
    )
}

