import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/heading';
import Copyright from './components/copyright';


const App =() =>{
  const [result, setresult] = useState("");

  const handleClick = (e) =>{
    setresult(result.concat(e.target.name));
  }

  const clear =() =>{
    if(result != "Error")
    setresult("");
  }
  const backspace =() =>{
    setresult(result.slice(0 ,result.length-1));

  }
  const calculate =() =>{
    try{
      setresult(eval(result).toString());
    }catch(err){
      setresult("Error");
    }
    
  }
  return(
    <div>
      
    <Heading/>
    <div className="container">
      <form>
        <input type="text" value={result}></input>
      </form>
      <div className="keypad"> 
        <button className="highlight" id="clear" onClick={clear}>Clear</button>
        <button className="highlight" id="backspace" onClick={backspace}>C</button>
        <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className="highlight" name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className="highlight" name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button className="highlight" id="result" onClick={calculate}>=</button>
      </div>
    </div>
    {/* <Copyright/> */}
    </div>
  )
}

export default App;
