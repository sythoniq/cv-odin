import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import {useState} from 'react'

function App() {
  const hyphen = "-"
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
        <div className="extra-info">
          <p className="email-name">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
            {emailAdd}</p>
          <p className="phone-number">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
            {phoneNo}</p>
        </div>
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
              <h3>{degree}</h3>
              <div className="education-dates">
                <p>{edStart} {hyphen} {edEnd}</p>
              </div>
            </div>
          </div>
          <div className="experience-container">
            <h3 className="exp-title">Experience</h3>
            <div className="experience-content">
              <div className="experience-extras">
                <h3>{cName}</h3>
                <div className="experience-dates"> 
                  <p>{cStart} {hyphen} {cEnd}</p>
                </div>
              </div>
              <div className="experience-description">
                <p>{cDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
