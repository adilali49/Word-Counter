import React, { useState } from "react";

const App = () => {
  const [characters, setCharacters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [text, setText] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);

    const Characters = e.target.value.replace(/\s/g, "").length;
    setCharacters(Characters);

    const Sentences = e.target.value
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0).length;
    setSentences(Sentences);
  };
  const deleteHandler = () => {
    setText("");
  };

  return (
    <div className="main">
      <div className="content">
        <div className="container">
          <div className="left">
            <textarea
              value={text}
              onChange={textHandler}
              name="words-container"
              placeholder="Type or paste your text here...."
            ></textarea>
          </div>
          <div className="right">
            <h1>Results</h1>
            <div className="results">
              <div className="left">
                <h2>Words</h2>
                <h3>{characters}</h3>
              </div>
              <div className="right">
                <h2>Sentences</h2>
                <h3>{sentences}</h3>
              </div>
            </div>
          </div>
        </div>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default App;
