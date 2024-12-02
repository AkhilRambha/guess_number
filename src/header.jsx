import { useState } from "react"



export default function Header(){
    return <header class="header">Guess Game</header>
    
}

export  function Score(p){
    return     <header class="score"> score <br/>  {p.s }</header> 
}

export function Revealer(p){
    return  <header class="rev" ><div>{p.number}</div></header>
}

export function Para(){
    return <header class="para" > <h6> Find the number between 1 and 20 ..</h6></header>
}


export function Input(p)
{
    let [value,setValue] =useState('');
    function handleChange(e){ 
        setValue(e.target.value)
    }
    function handleClick(){
        p.setNum(value);
    }
    return (    
        <>
        <header class="input" > <input type="text"  onChange={handleChange} /></header>,
        <header><button class="btn" onClick={handleClick}> check </button></header>
        </>
    )
}
export function Suggest(p){
    return <header><div class="suggest">{p.msg} </div></header>
}