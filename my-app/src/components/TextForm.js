import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase" , "success");
  }
  
  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase" , "success");
  }

    const handleClearClick = ()=>{
    let newtext = "";
    setText(newtext);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopyText = ()=>{
      var copytext = document.getElementById("myBox");
      copytext.select()
      navigator.clipboard.writeText(copytext.value);
    }


    const [text , setText] = useState("");
    // text = "new text" // wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
      <>
      <div className='container' style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'? '#042743' : 'white' , color : props.mode === 'dark'? 'white' : 'black'}} value={text} rows="10"></textarea>
        </div>
        <div className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</div>
        <div className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</div>
        <div className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</div>
        <div className="btn btn-primary mx-2" onClick={handleCopyText}>Copy text</div>
      </div>
      <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        {/* <h1>Your text summary</h1> */}
        <p>Total<b> {text.split(" ").length}</b> words and characters <b>{text.length}</b></p>
        {/* <p> <b> {0.008 * text.split(" ").length} </b> minutes</p> */}
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Enter something in the textbox above to preview it here."}</p>
      </div>
      </>
  )
}
