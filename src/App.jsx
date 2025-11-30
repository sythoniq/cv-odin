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
    switch(tgt) {
      case "full-name":
        setFullName(val);
      case "phone-no":
        setPhoneNo(val);
      case "emailAdd":
        setEmailAdd(val);
      case "degree":
        setDegree(val);
      case "edu-start":
        setEdStart(val);
      case "edu-end":
        setEdEnd(val);
      case "comp-name":
        setCName(val);
      case "exp-start":
        setCStart(val);
      case "exp-end":
        setCEnd(val);
      case "exp-desc":
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
        <p className="email-address">{emailAdd}</p>
        <p className="phone-no">{phoneNo}</p>
      </header>
      <div className="container">
        <div className="forms">
          <Personal change={handleChanges}/>
          <Education change={handleChanges}/>
          <Experience change={handleChanges}/>
        </div>
        <div className="main-content">
          <div className="education-content">
            <h3>{degree}</h3>
          </div>
          <div className="experience-content">
            <h3>{cName}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
