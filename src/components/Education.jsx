import Input from './Input.jsx'

function Education() {
  return (
    <div className="education-info">
      <p className="edu-p">Education</p>
      <label htmlFor="school-name">School Name
        <Input type="text" id="school-name" placeholder="School Name" />
      </label>
      <label htmlFor="certs">Degree/Certification
        <Input type="text" id="certs" placeholder="Degree/Certification" /> 
      </label>
      <label htmlFor="start">Start Date
        <Input type="text" id="start" placeholder="Start Date" />
      </label>
      <label htmlFor="end">End Date
        <Input type="text" id="end" placeholder="End Date" />
      </label>
    </div>    
  )
}

export default Education
