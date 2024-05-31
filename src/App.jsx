import {Routes, Route} from "react-router-dom"
import SignupPage from "./signup/signup"
import LoginPage from "./login/login"
import Homepage from "./home/home"
import ProductPage from "./products/product"
import TeamPage from "./team/team"
import ProfilePage from "./profile/profile"
import AboutPage from "./about/about"
import CustomerPage from "./customer/customer"
import WithdrawalRecords from "./withrdawalrecord/record"
import DepositPage from "./depositrecord/deposit"
import DepositedPage from "./deposit/deposited"
import WithdrawalPage from "./admin/withdrawal/withdrawals"
import CheckinPage from "./checkin/checkins"
import CartPage from "./cart/cart"
import DashboardPage from "./admin/dashboard/dash"
import UsersPage from "./admin/users/users"
import DepositDashPage from "./admin/deposit/deposit"
import AdminDashPage from "./admin/admins/admins"
import AdminProductsPage from "./admin/products/products"
import UserWithdrawalPage from "./withdrawal/withdrawal"


function App() {


  return (
  
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signup/:referral" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/customer" element={<CustomerPage/>}/>
          <Route path="/withdrawal/records" element={<WithdrawalRecords/>}/>
          <Route path="/deposit/records" element={<DepositPage/>}/>
          <Route path="/deposit" element={<DepositedPage/>}/>
          <Route path="/withdraw" element={<UserWithdrawalPage/>}/>
          <Route path="/checkin" element={<CheckinPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          
          
          {/** ADMIN DASHBOARDS  */}
          <Route path="/dash" element={<DashboardPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/product" element={<AdminProductsPage/>}/>
          <Route path="/withdrawal" element={<WithdrawalPage/>}/>
          <Route path="/deposits" element={<DepositDashPage/>}/>
          <Route path="/admins" element={<AdminDashPage/>}/>
    

        </Routes>
  
  )
}

export default App
