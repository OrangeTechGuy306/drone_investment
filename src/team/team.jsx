import GroupIcon from "@mui/icons-material/Group";
import "./team.css";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import BottomNav from "../components/bottomnav";
import { useEffect, useState } from "react";
import axios from "axios"


const TeamPage = () => {

  const [copy, setCopy] = useState("");
  const [ref, setRef] = useState([]);

  const getreferralNetwork = async()=>{
    const user = JSON.parse(localStorage.getItem("altomaxx"))
    const {data} = await axios.get(`http://localhost:5000/ref/${user.referral}`)
    setRef(data.msg)
    console.log(data.msg)
  }

  useEffect(()=>{
    getreferralNetwork()
  },[])

  const copyLink = async () => {
    const currentUser = JSON.parse(localStorage.getItem("altomaxx"));
    setCopy(`https://altomaxxnigeria.com/signup/${currentUser.referral}`)
    try {
      await navigator.clipboard.writeText(copy);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };

  return (
    <div className="p-5">
      <div>
        <div className="flex gap-2 items-center justify-start">
          <GroupIcon scale={2} />
          <h1 className="text-sm">Invite your friends to earn more...</h1>
        </div>
        <hr />
        <div className="flex my-2">
          <input
            type="text"
            className="form-control"
            value={`https://altomaxxnigeria.com/signup`}
            onChange={(e) => {
              setCopy(e.target.value);
            }}
          />
          <button onClick={copyLink} className="btn btn-secondary">
            <ContentPasteIcon />
          </button>
        </div>
        <small>Copy your referral link to refer your friends</small>
        <hr />
      </div>

      <h5>How the Referral Network Works!</h5>
      <div className="flex justify-center flex-col items-start">
        <small>
          When the friends you invite sign up and invest, you will get 20% or
          15% cashback instantly depending on the amount invested.
        </small>{" "}
        <br />
        <small>
          You will get 2% cash back when your level 2 team members invest.
        </small>{" "}
        <br />
        <small>
          You will get 1% cash back when your level 3 team members invest.
        </small>{" "}
        <br />
        <small>
          Cash rewards will be sent to your account balance once your team
          members invest. You can withdraw it immediately.
        </small>
      </div>

      <div>
        <div className="flex justify-center items-center gap-3 my-5">
          <div className="w-[max-content] bg-black">
            <h4 className="text-white p-1">LV1</h4>
          </div>

          <div className="text-center">
            <small>20%</small> <br />
            <small>Commission rate</small>
          </div>

          <div className="text-center">
            <small>{ref.totallevel1}</small> <br />
            <small>Quantity</small>
          </div>
          <div className="text-center">
            <small>{0}</small> <br />
            <small>Bonus</small>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 my-5">
          <div className="w-[max-content] bg-black">
            <h4 className="text-white p-1">LV2</h4>
          </div>
          <div className="text-center">
            <small>2%</small> <br />
            <small>Commission rate</small>
          </div>
          <div className="text-center">
            <small>{ref.totallevel2}</small> <br />
            <small>Quantity</small>
          </div>
          <div className="text-center">
            <small>{0}</small> <br />
            <small>Bonus</small>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 my-5">
          <div className="w-[max-content] bg-black">
            <h4 className="text-white p-1">LV3</h4>
          </div>
          <div className="text-center">
            <small>1%</small> <br />
            <small>Commission rate</small>
          </div>
          <div className="text-center">
            <small>{ref.totallevel3}</small> <br />
            <small>Quantity</small>
          </div>
          <div className="text-center">
            <small>{0}</small> <br />
            <small>Bonus</small>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center gap-3 my-5">
        <div className="text-center flex flex-col justify-center items-center w-[150px] py-10">
          <h5>{ref.totalsummary}</h5>
          <small>No of People</small>
        </div>
        <div className="text-center flex flex-col justify-center items-center w-[150px] py-10">
          <h5>&#8358;{0}</h5>
          <small>Total Revenue</small>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default TeamPage;
