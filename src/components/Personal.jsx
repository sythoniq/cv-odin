import Input from "./Input"

function Personal() {
    return (
        <div className="personal-info">
            <p className="personal-p">Personal</p>
            <label htmlFor="full-name">Full Name
                <Input type="text" id="full-name" placeholder="Enter Full Name" />
            </label>
            <label htmlFor="email">Email Address
                <Input type="email" id="email" placeholder="Enter Email" />
            </label>
            <label htmlFor="phone-no">Phone Number
                <Input type="tel" id="phone-no" placeholder="Enter Phone Number" />
            </label>
        </div>
    )
}

export default Personal
