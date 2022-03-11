import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
const startDate = new Date(2017, 4)
function calculateYears(start){
    let now = new Date(2022, 3)
    let years = now.getFullYear() - startDate.getFullYear()
    console.log(now.getFullYear(), startDate.getFullYear())
    return years
}
export default function YearsHUD(props){
    const styles = {
        bg: {
            border: 'solid green 1rem',
            boxShadow: '0px 0px 8px green',
            display: 'grid',
            background: 'darkgreen'
        },
        exp: {
            fontWeight: 'bold',
            color: 'white'
        }
    }
    const [exp, setExp] = useState(calculateYears(startDate))
    let [] = useState()
    useEffect(()=>{
        if(exp){
            console.log(exp)
            document.getElementById('exp').innerHTML = `${exp} yrs`
        }
    }, [exp])
    // useEffect(()=>{

    // })

    return(
            <section id='years-wrapper'>
                <p id='exp'></p>
                <label>EXP</label>
            </section>
    )
}

