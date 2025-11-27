import Personal from './components/Personal.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'

function App() {
  function handleFormSubmit(e) {
    console.log(e)
  }

    return (
      <>
        <form className="info-form" action="#" method="post">
          <Personal />
          <Education />
          <Experience />
          <button id="submit-form" onClick={(e) => {
          e.preventDefault(e)
          handleFormSubmit
        }}>Submit</button>
      </form>
      </>
    )
}

export default App
