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
        let newText = "";
        SetText(newText);
    };
    const handleChange = (event) =>{
        SetText(event.target.value);
    }
    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        SetText(newText.join(" "));
    }


  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ?'#fff':'#212529'}}>
       <div className="mb-3">
          <h1 className='mb-2'>{props.heading}</h1>
          <label for="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ?'#212529':'#fff', color: props.mode === 'dark' ?'#fff':'#212529'}} onChange={handleChange}  id="myBox" rows="5">Enter text here.</textarea>
       </div>
        <button disabled={text.length === 0} className='btn btn-secondary mx-2 my-2 border-0 ' onClick={changetoupper}>Convert to Uppercase</button>
       <button disabled={text.length === 0} className='btn btn-secondary mx-2 my-2 border-0' onClick={changetolower}>Convert to Lowercase</button>
       <button disabled={text.length === 0} className='btn btn-secondary mx-2 my-2  border-0' onClick={clear}>Clear</button>
       <button disabled={text.length === 0} className='btn btn-secondary my-2 mx-2  border-0' onClick={handleCopy}>Copy</button>
       <button disabled={text.length === 0} className='btn btn-secondary my-2 mx-2  border-0' onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>

    <div className="container" style={{color: props.mode === 'dark' ?'#fff':'#212529'}}>
        <h1>your text summary.</h1>
        <p>{text.split(" ").filter((element) =>{return element.length !==0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length !==0}).length} Mintues read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something here to preview."}</p>
    </div>
    
    
    </>
        
  )
}
