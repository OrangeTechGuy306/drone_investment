import { Card } from "antd";
import AdminLayout from "../layout/layout";
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletIcon from '@mui/icons-material/Wallet';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';



const DashboardPage = () => {


  
  return (

    <AdminLayout>
    
      <h1 className="text-black text-md my-4">DASHBOARD</h1>

      <div className="flex items-center gap-3 my-5 flex-wrap">

        <Card.Grid
          style={{
            width: 250,
            height:100,
            background:"linear-gradient(to right, #2E3192, #1BFFFF)",
            color:"black",
            borderRadius:10,
          }}
          className="p-3"
        >
           <div className="flex justify-between items-center">
                <div className="">
                    <GroupIcon style={{fontSize:30, color:"white"}}/>
                    <h4 className="text-white">Users</h4>
                </div>
                <h4 className="text-white">{Intl.NumberFormat().format(965823)}</h4>
           </div>
        </Card.Grid>

        <Card.Grid
          style={{
            width: 250,
            height:100,
            background:"linear-gradient(to right, #D4145A, #FBB03B)",
            color:"black",
            borderRadius:10,
          }}
          className="p-3"
        >
           <div className="flex justify-between items-center">
                <div className="">
                    <AccountBalanceWalletIcon style={{fontSize:30, color:"white"}}/>
                    <h4 className="text-white">Deposits</h4>
                </div>
                <h4 className="text-white">{Intl.NumberFormat().format(965823)}</h4>
           </div>
        </Card.Grid>

        <Card.Grid
          style={{
            width: 250,
            height:100,
            background:"linear-gradient(to right, #009245, #FCEE21)",
            color:"black",
            borderRadius:10,
          }}
          className="p-3"
        >
           <div className="flex justify-between items-center">
                <div className="">
                    <WalletIcon style={{fontSize:30, color:"white"}}/>
                    <h4 className="text-white">Withdrawals</h4>
                </div>
                <h4 className="text-white">{Intl.NumberFormat().format(965823)}</h4>
           </div>
        </Card.Grid>

        <Card.Grid
          style={{
            width: 250,
            height:100,
            background:"linear-gradient(to right, #662D8C, #ED1E79)",
            color:"black",
            borderRadius:10,
          }}
          className="p-3"
        >
           <div className="flex justify-between items-center">
                <div className="">
                    <AdminPanelSettingsIcon style={{fontSize:30, color:"white"}}/>
                    <h4 className="text-white">Admins</h4>
                </div>
                <h4 className="text-white">{Intl.NumberFormat().format(965823)}</h4>
           </div>
        </Card.Grid>

      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
