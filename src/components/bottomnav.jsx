import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Groups2Icon from '@mui/icons-material/Groups2';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom';
import "./bottomnav.css"



const BottomNav = () => {


  return (
    <div className='bottomNav'>
    <div className="flex justify-around items-center heroMenuContainer">
    <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-5">
        <HomeIcon/>
        <small>Home</small>
    </Link>
    <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-5">
        <LocalMallIcon/>
        <small>Products</small>
    </Link>
    <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-5">
        <Groups2Icon/>
        <small>Team</small>
    </Link>
    <Link to={""} className="text-center flex flex-col justify-center items-center heroNav gap-5">
        <AssignmentIndIcon/>
        <small>Profile</small>
    </Link>
</div>
    </div>
  )
}

export default BottomNav
