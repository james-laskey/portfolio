/*
    Responsible for order attributes in proper order and displaying strongest skills in proper order
*/
import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import Attribute from './Attribute.jsx'
const attributes = [
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
        rating: '79'
    },
    {
        name: 'AWS',
        rating: '55'
    },
    {
        name: 'UI/UX Design',
        rating: '75'
    },
    {
        name: 'Microservices',
        rating: '40'
    },
    {
        name: 'Unit Testing',
        rating: '60'
    },


]
export default function Attributes(props){
    const [orderedAttrs, setAttrs] = useState(insertionSort(attributes))
    let [] = useState()
    useEffect(()=>{
        console.log(orderedAttrs)
        if(orderedAttrs){
            orderedAttrs.map((attr)=>{
                
            })
        }
    }, [orderedAttrs])
    useEffect(()=>{

    })

    return(
        <section id='attrs-selector'>
        </section>
    )
}

