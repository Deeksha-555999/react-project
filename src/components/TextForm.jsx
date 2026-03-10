import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log("uppercase is clicked");
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    console.log("lowercase is clicked");
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    console.log("Clear is clicked");
    setText("");
  };

  const handleOnChange = (e) => {
    console.log("On change");
    const newText = e.target.value;
    setText(newText);
  };

  const { heading } = props;
  const [text, setText] = useState(""); // state to store text value

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{ background: props.mode === 'dark' ? '#353a3e14' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase{" "}
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
};

export default TextForm;
