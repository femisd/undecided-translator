import './App.css';
import React, { useState } from 'react';
import dictionary from './dictionary';
import Button from 'react-bootstrap/Button';
function App() {

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = (text) => {
    let translation = "";
    if (text == "") { setTranslatedText(""); }
    for (let char of text) {
      if (char.match(/([A-Z])/)) {
        translation += dictionary.get(char.toLowerCase()).toUpperCase()
      } else if (char.match(/([a-z])/)) {
        translation += dictionary.get(char)
      } else {
        translation += char;
      }
      setTranslatedText(translation)
    }

  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="rgb">Undecided Translator</h1>
        <div class="row">
          <div class="col-md col-sm-9">
            <h3>English</h3>
            <textarea type="text" class="form-control" placeholder="Your your text here"
              value={inputText} onChange={e => { setInputText(e.target.value); translate(e.target.value) }}
              rows="25" cols="90" />
          </div>
          <div class="col-md col-sm-9">
            <h3>Translation</h3>
            <textarea type="text" class="form-control translated-text" readOnly
              value={translatedText} rows="25" cols="90"/>
            <Button variant="light" onClick={() => {navigator.clipboard.writeText(translatedText)}}>📋 Copy</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
