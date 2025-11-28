import Input from './Input.jsx'

function Experience() {
  return (
    <div className="experience-info">
      Experience
      <label htmlFor="experience">Experience
        <Input type="text" id="experience" placeholder="Experience" />
      </label>
      <label htmlFor="exp-desc">Description
        <Input type="text" id="exp-desc" placeholder="Description" />
      </label>
    </div>
  )
}

export default Experience
