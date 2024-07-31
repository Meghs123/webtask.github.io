//for function based component
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked "+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }


    const handleLoClick=()=>{
        console.log("Lowercase was clicked "+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnChange=(event)=>{
       // console.log("On change");
        setText(event.target.value);

        
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }

    const handleCopy=()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success");
    }
    



    const [text, setText] = useState(' ');
    // const [text, setText] = useState('Enter text here');
    return (
        <>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
 <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
 </div>
</>
  )
}
