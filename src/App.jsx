import {useState} from 'react'
import Personal from './components/Personal.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Close from './components/Close.jsx'

function App() {
  function handleFormSubmit(e) {
    const tgt = e.target;
    const form = tgt.parentNode;
  }

  function handleCloseForm(e) {
    const tgt = e.target;
    tgt.parentNode.style.display = "none";
  }

  return (
    <>
      <form className="info-form" action="#" method="post" name="info">
        <Close onClick={handleCloseForm} />
        <div className="top-form">
          <Personal />
          <Education />
        </div>
        <div className="bot-form">
          <Experience />
        </div>
        <button id="submit-form" onClick={(e) => {
          e.preventDefault(e)
          handleFormSubmit(e)
        }}>Submit</button>
      </form>
      </>
    )
}

export default App
