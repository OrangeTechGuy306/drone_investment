
import { Link } from "react-router-dom"
import "./home.css"
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import BottomNav from "../components/bottomnav";

const Homepage = () => {
  return (
    <>
        <div className="heroSection flex flex-col justify-center items-center">
            <img src="/assets/d2.png" alt="" width={300}/>
            <div className="text-center">
                <h1 className="text-center ">Invest! <br/> and Let&rsquo;s Fly Higher</h1>
                <small >Invest, Refer & Earn</small>
            </div>
        </div>

        <div className="flex justify-center items-center heroMenuContainer">
            <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <AddCardIcon/>
                <small>Make <br/> Deposit</small>
            </Link>
            <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <AccountBalanceWalletIcon/>
                <small>Withdraw <br/> Money</small>
            </Link>
            <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <DeviceUnknownIcon/>
                <small>Customer <br/>Care</small>
            </Link>
            <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                <EventRepeatIcon/>
                <small>Daily <br/>Check in</small>
            </Link>
        </div>
        

        <div className="balanceContainer">
            <div className="flex justify-center items-center">
            <small className="balanceSignContainer rounded-md">&#8358;</small>
                <h4 className="text-sm">{Intl.NumberFormat().format(300000)}</h4>
            </div>
        </div>

        <div className="flex justify-around items-center gap-5 aboutSection">
                <h1 className="text-xl text-center">Discover the world from <br/> a bird&rsquo;s eye view</h1>
                <img src="/assets/d1.png" alt="" width={200}/>
        </div>
        <BottomNav/>
    </>
  )
}

export default Homepage
