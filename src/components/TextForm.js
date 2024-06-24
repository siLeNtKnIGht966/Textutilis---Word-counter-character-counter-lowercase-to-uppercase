import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, SetText] = useState('');
    const changetoupper =()=>{
        let newText = text.toUpperCase();
        SetText(newText);
    };
     const changetolower =()=>{
        let newText = text.toLowerCase();
        SetText(newText);
    };
     const clear =()=>{
        let newText = " ";
        SetText(newText);
    };
    const handleChange = (event) =>{
        SetText(event.target.value);
    }




  return (
    <>
    <div className='container'>
       <div className="mb-3">
          <h1>{props.heading}</h1>
          <label for="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="3">Enter text here.</textarea>
       </div>
        <button className='btn btn-primary mx-2 bg-dark border-0 ' onClick={changetoupper}>Convert to Uppercase</button>
       <button className='btn btn-primary mx-2 bg-dark border-0' onClick={changetolower}>Convert to Lowecase</button>
       <button className='btn btn-primary mx-2 bg-dark border-0' onClick={clear}>Clear</button>
    </div>

    <div className="container">
        <h1>your text summary.</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Mintues read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    
    </>
    
  )
}
