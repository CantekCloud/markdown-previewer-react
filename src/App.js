import { useState } from 'react'

import './App.css';
import NavigationBar from './components/Navbar.js';
import MarkdownGuide from './components/MarkdownGuide.js';
import MarkdownInput from './components/MarkdownInput.js';
import MarkdownOutput from './components/MarkdownOutput.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [markdown, setMarkdown] = useState(`# Hello World`);
    const [showGuide, setShowGuide] = useState(false);
    const [guideSelection, setGuideSelection] = useState(' ');

    let onToggleGuide = () => {
        setShowGuide(!showGuide)
    }

    let handleChange = (event) => {
        setMarkdown(event.target.value)
    }

    let onClick = (event) => {
        event.preventDefault();
        setGuideSelection('\n'+event.target.value)
        console.log(guideSelection)
    }

  return (
      <div className="App">
          
          <div>
              <NavigationBar />
          </div>
          <br />
          <br />
          <div className="toggle">
              <MarkdownGuide showGuide={showGuide} onToggleGuide={onToggleGuide} onClick={onClick}/>
          </div>

          <div className="input">
              <MarkdownInput onChange={handleChange} value={markdown} onGuide={guideSelection}/>
          </div>

          <div className="output">
              <MarkdownOutput markdown={markdown}/>
          </div>

          <br />
          <br />

    </div>
  );
}

export default App;
