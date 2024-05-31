
import { Link } from "react-router-dom"
import "./home.css"
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import BottomNav from "../components/bottomnav";

const Homepage = () => {
  return (
    <div>

    <div className="homeDashContainer">
        <div className="homeDashboard">
                <div className="homeDashCard flex flex flex-col text-center">
                    <small className="text-white">&#8358;{Intl.NumberFormat().format(0)}</small>
                    <small className="text-white">Total <br/> Earnings</small>
                </div>
                <div className="homeDashCard flex flex flex-col text-center">
                    <small className="text-white flex flex-col text-center">&#8358;{Intl.NumberFormat().format(0)}</small>
                    <small className="text-white flex flex-col text-center">Total <br/> Recharge</small>
                </div>
                <div className="homeDashCard flex flex flex-col text-center">
                    <small className="text-white">&#8358;{Intl.NumberFormat().format(0)}</small>
                    <small className="text-white">Total <br/> Withdrawal</small>
                </div>
                <div className="homeDashCard flex flex flex-col text-center">
                    <small className="text-white">&#8358;{Intl.NumberFormat().format(0)}</small>
                    <small className="text-white">Today&apos;s <br/> Income</small>
                </div>
                <div className="homeDashCard flex flex-col text-center">
                    <small className="text-white">&#8358;{Intl.NumberFormat().format(0)}</small>
                    <small className="text-white">Team <br/> Income</small>
                </div>
                <div className="homeDashCard flex flex-col text-center">
                    <small className="text-white">&#8358;{Intl.NumberFormat().format(0)}</small>
                    <small className="text-white">Checkin</small>
                </div>
        </div>
    </div>


        <div className="heroSection flex flex-col justify-center items-center">
            <img src="/assets/d2.png" alt="" width={300}/>
            <div className="text-center">
                <h1 className="text-center ">Invest! <br/> and Let&rsquo;s Fly Higher</h1>
                <small >Invest, Refer & Earn</small>
            </div>
        </div>

        

        <div className="flex justify-center items-center heroMenuContainer">
            <Link to={"/deposit"} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <AddCardIcon/>
                <small>Make <br/> Deposit</small>
            </Link>
            <Link to={"/withdraw"} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <AccountBalanceWalletIcon/>
                <small>Withdraw <br/> Money</small>
            </Link>
            <Link to={"/customer"} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <DeviceUnknownIcon/>
                <small>Customer <br/>Care</small>
            </Link>
            <Link to={"/checkin"} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <EventRepeatIcon/>
                <small>Daily <br/>Check in</small>
            </Link>
        </div>
    

        <div className="flex justify-around items-center gap-5 aboutSection">
                <h1 className="text-xl text-center">Discover the world from <br/> a bird&rsquo;s eye view</h1>
                <img src="/assets/d1.png" alt="" width={200}/>
        </div>

        <BottomNav/>
    </div>
  )
}

export default Homepage
