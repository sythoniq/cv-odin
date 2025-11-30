import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  function validateChange(tgt, val) {
    if (val == "") {
      return;
    }

  }

  function handleChanges(e) {
    const target = e.id;
    switch (target) {
      case "full-name":
        validateChange(target, e.value);
      case "phone-no":
        console.log(e.value);
      case "email":
        console.log(e.value);
    }
  } 

  return (
    <>
      <Personal change={handleChanges}/>
      <Education />
      <Experience />
    </>
  )
}

export default App
