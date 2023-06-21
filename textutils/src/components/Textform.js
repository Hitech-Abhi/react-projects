import React, { useState } from 'react'

function Textform(props) {
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase());
    }

    const clearText = ()=>{
        setText("");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const [text, setText] = useState("")

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Time taken to read this text is {0.008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length==0?"Enter text to preview":text}</p>
        </div>
        </>
    )
}

export default Textform;