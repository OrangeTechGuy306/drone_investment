import { Input } from "antd";
import "./signup.css"

const SignupPage = () => {

    const handleChange = ()=>{}

  return (
    <div>
        <div className="signupForm flex justify-center items-center">
            <form>
                <div>
                    <h3 className="text-center">Registration</h3>
                </div>
                <div className="mobileInput flex">
                    <label className="rounded-md">+234</label>
                    <Input type="text" placeholder="mobile" onChange={handleChange} className="mInput"/>
                </div>
                <div>
                    <Input type="password" placeholder="Password" onChange={handleChange}/>
                </div>
                <div>
                    <Input type="password" placeholder="Confirm Password" onChange={handleChange}/>
                </div>
                <div>
                    <Input type="text" value={""} placeholder="Referral" onChange={handleChange}/>
                </div>
                <div className="mobileInput flex">
                <Input type="text" placeholder="Verify" onChange={handleChange} className="mInput"/>
                <label className="rounded-md">948</label>
            </div>
                <input type="submit" className="" value={"Sign up"}/>
            </form>
        </div>  
    </div>
  )


}

export default SignupPage
