import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnChange = (p)=>{
    var newText = p.target.value;
    setText(newText)
  }

  const handleUpClick = ()=> {
    var newText = textOP.toUpperCase();
    console.log("Uppercase was clicked " + newText)
    setText(newText);
    //setText("You have clicked on handleUpClick")
  } 

  const [textOP, setText] = useState('Enter text here22');
  //text = "Changed"; //wrong way to change state
  //setText("Changed"); //correct way

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="myBox" rows="8" value={textOP} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>{props.btnText}</button>
    </div>
  )
}
