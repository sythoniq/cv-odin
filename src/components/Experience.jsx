import Input from './sub/Input.jsx'

function Experience(props) {
  return (
    <div className="experience-info">
      <Input type="text" id="comp-name" placeholder="Enter Company Name" text="Company Name" handleChange={props.change} />
      <Input type="text" id="exp-start" placeholder="Enter Start Date" text="Start Date" handleChange={props.change} />
      <Input type="text" id="exp-end" placeholder="Enter End Date" text="End Date" handleChange={props.change} />
      <Input type="text-area" id="exp-desc" placeholder="Enter Description" text="Description" handleChange={props.change} />
    </div>
  )
}

export default Experience
