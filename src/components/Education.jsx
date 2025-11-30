import Input from './sub/Input.jsx'

function Education(props) {
  return (
    <div className="education-info">
      <Input type="text" id="degree" placeholder="Enter Degree/Certification" text="Degree/Certification" handleChange={props.change} />
      <Input type="text" id="edu-start" placeholder="Enter Start Date" text="Start Date" handleChange={props.change} />
      <Input type="text" id="edu-end" placeholder="Enter End Date" text="End Date" handleChange={props.change} />
    </div>
  ) 
}

export default Education
