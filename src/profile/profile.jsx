import { BiLogOutCircle, BiUser} from "react-icons/bi";
import { FaHeadset, FaNoteSticky } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { MdEditNote } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { IoIosArrowForward, IoMdInformationCircleOutline } from "react-icons/io";
import "./profile.css"
import BottomNav from "../components/bottomnav";
import { useEffect, useState } from "react";
import axios from "axios"



const ProfilePage = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("altomaxx"))
    const [total, setTotal] = useState('')
    // const [ref, setRef] = useState('')

    const getreferralNetwork = async()=>{
        
        // const currentUser = JSON.parse(localStorage.getItem("altomaxx"));
        // const {data} = await axios.get(`http://localhost:5000/ref/${currentUser.referral}`)
        // setRef(data.msg)
        // console.log(data.msg)
      }

    const userWallet = async()=>{
        const user = JSON.parse(localStorage.getItem("altomaxx"))
        const {data} = await axios.get(`http://localhost:5000/user/wallet/${user.name}`)
        console.log(data)
        if(data.status === true){
            setTotal(data.msg)
        }else{
            setTotal(data.msg)
            console.log(data)
        }
    }

   
    const logout = ()=>{
        localStorage.removeItem("altomaxx")
        navigate("/login")
    }

    useEffect(()=>{
        userWallet()
        getreferralNetwork()
    },[])


    return ( 
        <section>

            <div className="profileHeroSection">

                <div className='profileHeader flex justify-between items-center text-white px-2 py-5 gap-2'>
                    <div className='proLogoContainer flex justify=center items-center'>
                        <BiUser size={40}/>
                        <h5>{user.name}</h5>
                    </div>
                    <div className='text-white px-5 flex flex-col'>
                        <h5 className='font-bold text-sm'>&#8358; {Intl.NumberFormat().format(total)}</h5>
                        <small className='margin-auto'>Account Balance</small>
                    </div>
                </div>

            </div>

            <div className="flex justify-around items-center heroMenuContainer">
                <Link to={"/deposit"} className="text-center flex flex-col justify-center items-center heroNav gap-1">
                    <AddCardIcon />
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


            <div className='pb-5 flex justify-center flex-wrap gap-2 items-center px-3 profileDashContainer mt-5'>

                <Link to={"/about"} className='proLinkContainer flex justify-between items-center text-black py-3 text-center text-white'>
                    <div className='flex justify-start items-center flex-col gap-1'>
                        <IoMdInformationCircleOutline size={30} />
                        <small className=''>About Us</small>
                    </div>
                   
                </Link>

                <Link to={"/cart"} className='proLinkContainer flex justify-between items-center text-black py-3 text-center text-white'>
                    <div className='flex justify-start items-center gap-1 flex-col'>
                        <GiDeliveryDrone size={30} />
                        <small className=''>My Drone</small>
                    </div>
                </Link>

                <Link to={"/team"} className='proLinkContainer flex justify-between items-center text-black py-3 text-center text-white'>
                    <div className='flex justify-start items-center gap-1 flex-col'>
                        <FaNoteSticky size={30} />
                        <span className=''>Platform <br/> rules</span>
                    </div>
                </Link>

                <Link to={"/customer"} className='proLinkContainer flex justify-between items-center text-black py-3 text-center text-white'>
                    <div className='flex justify-start items-center gap-1 flex-col'>
                        <FaHeadset size={30} />
                        <span className=''>Customer Care</span>
                        </div>
                </Link>

                <Link to={"/withdrawal/records"} className='proLinkContainer flex justify-between items-center text-black py-3 text-center text-white'>
                    <div className='flex justify-start items-center gap-1 flex-col text-white'>
                        <MdEditNote size={30} />
                        <span className=''>Withdrawal <br/> Records</span>
                    </div>
                        
                </Link>

                <Link to={"/deposit/records"} className='proLinkContainer flex justify-between items-center text-black py-3 text-center text-white'>
                    <div className='flex justify-start text-center items-center gap-1 flex-col'>
                        <MdEditNote size={30} />
                        <span className='text-white'>Deposit <br/> Records</span>
                    </div>
                </Link>

                <button className=' btn btn-danger text-white proLinkContainer flex justify-between items-center text-black py-3' onClick={logout}>
                    <div className='flex justify-start items-center gap-3'>
                        <BiLogOutCircle size={30} />
                        <span className='text-md '>Logout</span>
                        </div>
                    <IoIosArrowForward size={30} />
                </button>
            </div> 
            
            <BottomNav/>

        </section>
    );


}
 
export default ProfilePage;