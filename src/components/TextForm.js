import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setText('');
        document.getElementById('capitalizedText').innerText = newText;
    }

    const convertToLower = () => {
        let newText = text.toLowerCase();
        setText('');
        document.getElementById('lowercaseText').innerText = newText;
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="yourtext" rows="6" onChange={handleOnChange} ></textarea>
                    <button className="btn btn-primary my-3" onClick={convertToUpper}>Convert uppercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={convertToLower}>Convert lowercase</button>

                    <div className="">
                        <h3>Capitalized Text</h3>
                        <p id='capitalizedText'></p>
                    </div>
                    <div className="">
                        <h3>Lowercase Text</h3>
                        <p id='lowercaseText'></p>
                    </div>

                </div>
            </div>
            <div className='container'>
                <h1>Your text summary</h1>
                {/* trim blank space */}
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
            </div>
        </>
    )
}
