import { Link } from "react-router-dom"
import "./layout.css"
import { BiSearch, BiUser } from "react-icons/bi"
import { Avatar } from "antd"
import { Logout, SearchOutlined } from "@mui/icons-material"

const AdminLayout = ({children}) => {


  return (
    <div className="layoutContainer">   
        <div className="sidebar">
            <h4>Investment App</h4>
            <div className="sidebarLinks flex flex-col justify-start items-start gap-4">
                <Link to={'/dash'}>Dashboard</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/withdrawal'}>Withdrawals</Link>
                <Link to={'/deposits'}>Deposits</Link>
                <Link to={'/admins'}>Admins</Link>
            </div>
        </div>

        <div>
            <div className="adminNav flex justify-between items-center p-3">
                <form className="flex justify-between items-center">
                    <input type="search" name="" placeholder="Search"/>
                    <button type="submit" className="p-0"><SearchOutlined/></button>
                </form>

                <div className=" flex gap-2 items-center">
                    <Avatar icon={<BiUser />} style={{background:"black"}} />
                    <button className="px-3 py-1 btn btn-danger"><Logout/></button>
                </div>

            </div>
            {children}
        </div>


    </div>
  )
}

export default AdminLayout
