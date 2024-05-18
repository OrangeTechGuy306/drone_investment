import { Input } from "antd";
// import "../signup/signup.css"




const LoginPage = () => {


  const handleChange = () => {};

  return (
    <div>


      <div className="signupForm flex justify-center items-center">


        <form>
        
          <div>
              <h1 className="text-md">Login</h1>
          </div>

          <div>
            <Input type="tel" placeholder="Mobile" onChange={handleChange} />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <input type="submit" className="" value={"Sign up"} />

        </form>

      </div>
    </div>
  );
};

export default LoginPage;
