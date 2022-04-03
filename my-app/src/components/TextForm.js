import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase", "success");
  }

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase", "success");
  }

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopyText = () => {
    var copytext = document.getElementById("myBox");
    copytext.select()
    navigator.clipboard.writeText(copytext.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied To Clipboard" , "success");
  }


  const [text, setText] = useState("");
  // text = "new text" // wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick} style={{ backgroundColor: props.mode === 'dark' ? 'black' : '#0d6efd', color: props.mode === 'dark' ? 'white' : 'white', borderColor: props.mode === 'dark' ? 'white' : 'white' }} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLoClick} style={{ backgroundColor: props.mode === 'dark' ? 'black' : '#0d6efd', color: props.mode === 'dark' ? 'white' : 'white', borderColor: props.mode === 'dark' ? 'white' : 'white' }}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} disabled={text.length===0} style={{ backgroundColor: props.mode === 'dark' ? 'black' : '#0d6efd', color: props.mode === 'dark' ? 'white' : 'white', borderColor: props.mode === 'dark' ? 'white' : 'white' }}>Clear text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyText} disabled={text.length===0} style={{ backgroundColor: props.mode === 'dark' ? 'black' : '#0d6efd', color: props.mode === 'dark' ? 'white' : 'white', borderColor: props.mode === 'dark' ? 'white' : 'white' }}>Copy text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        {/* <h1>Your text summary</h1> */}
        <p>Total<b> {text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> words and characters <b>{text.length}</b></p>
        {/* <p> <b> {0.008 * text.split(" ").length} </b> minutes</p> */}
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
      </div>
    </>
  )
}
