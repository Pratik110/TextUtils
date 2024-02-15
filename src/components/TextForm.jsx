import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpClick = () =>{

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLowClick = () =>{

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnChange = (event) =>{

        setText(event.target.value);
    }

    const handleClearClick = () =>{

        let newText = '';
        setText(newText);
        props.showAlert("Textbox has been cleared","success");
    }

    const handleCopy = () => {
        // let textValue = event.target.value;
        let textArea = document.querySelector("#myBox")

        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showAlert("Copied to clipboard","success");
    }

    const handleSpace = () => {
        let WordArr = text.split(/[ ]+/);
        let newTextVal = WordArr.join(" ");
        setText(newTextVal);
        props.showAlert("Textbox formatted","success");
    }
    const [text, setText] = useState('');
    // setText("shshshhs");
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" value={text} rows="15"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Extra Space</button>

        </div>

        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>No. of words : {text.split(/\s+/).filter((element) => { return element.length!==0}).length}</p>
            <p>No. of characters : {text.length}</p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview"}</p>
        </div>
        </>
        
    )
}