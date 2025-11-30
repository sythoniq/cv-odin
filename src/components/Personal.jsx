import Input from './sub/Input.jsx'

function Personal(props) {
  return (
    <div className="personal-info">
      <Input type="text" id="full-name" placeholder="Enter Full Name" text="Full Name" handleChange={props.change} />
      <Input type="email" id="email" placeholder="Enter Email Address" text="Email Address" handleChange={props.change} />
      <Input type="tel" id="phone-no" placeholder="Enter Phone Number" text="Phone Number" handleChange={props.change} />
    </div>
  )
}

export default Personal
