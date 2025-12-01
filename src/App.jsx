import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import {useState} from 'react'

function App() {
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [degree, setDegree] = useState("");
  const [edStart, setEdStart] = useState("");
  const [edEnd, setEdEnd] = useState("");
  const [cName, setCName] = useState("");
  const [cStart, setCStart] = useState("");
  const [cEnd, setCEnd] = useState("");
  const [cDesc, setCDesc] = useState("");

  function validateChange(tgt, val) {
    if (val == "") {
      return;
    }
    if (tgt === "full-name") {
      setFullName(val);
    } else if (tgt === "email") {
      setEmailAdd(val);
    } else if (tgt === "phone-no") {
      setPhoneNo(val);
    } else if (tgt === "degree") {
      setDegree(val);
    } else if (tgt === "edu-start") {
      setEdStart(val);
    } else if (tgt === "edu-end") {
      setEdEnd(val);
    } else if (tgt === "comp-name") {
      setCName(val);
    } else if (tgt === "exp-start") {
      setCStart(val);
    } else if (tgt === "exp-end") {
      setCEnd(val);
    } else if (tgt === "exp-desc") {
      setCDesc(val);
    }
  } 

  function handleChanges(e) {
    const target = e.id;
    validateChange(target, e.value); 
  } 

  return (
    <>
      <header className="heading">
        <h3>{fullName}</h3>
        <p className="email-name">{emailAdd}</p>
        <p className="phone-number">{phoneNo}</p>
      </header>
      <div className="container">
        <div className="forms">
          <Personal change={handleChanges}/>
          <Education change={handleChanges}/>
          <Experience change={handleChanges}/>
        </div>
        <div className="main-content">
          <div className="education-container">
            <h3 className="edu-title">Education</h3>
            <div className="education-content">
              <div className="education-dates">
                <h4>{edStart}</h4>
                <h4>{edEnd}</h4>
              </div>
              <h3>{degree}</h3>
            </div>
          </div>
          <div className="experience-container">
            <h3 className="exp-title">Experience</h3>
            <div className="experience-content">
              <h3>{cName}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
