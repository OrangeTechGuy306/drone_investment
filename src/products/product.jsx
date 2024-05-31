import { useEffect, useState } from "react"
import BottomNav from "../components/bottomnav"
import "./product.css"
import axios from "axios"
import {toast, Toaster} from "sonner"




const ProductPage = () => {


    const [products, setProducts] = useState([])
    const [balance, setBalance] = useState()

    const fetchProducts = async()=>{
        const {data} = await axios.get(`http://localhost:5000/products`)
        if(data.status === true){
            setProducts(data.msg)
            // console.log(data.msg)
        }  else{
            console.log("no data")
        }
    }

    const userWallet = async()=>{
        const user = JSON.parse(localStorage.getItem("altomaxx"))
        const {data} = await axios.get(`http://localhost:5000/user/wallet/${user.name}`)
        console.log(data)
        if(data.status === true){
            setBalance(data.msg)
        }else{
            setBalance(data.msg)
        }
    }

    const buyProduct = async(rev, price, name, income, image)=>{
        const currentUser = JSON.parse(localStorage.getItem("altomaxx"))
        const ref = currentUser.referral
        if(parseInt(price) > parseInt(balance)){
            toast.error("Insufficient Balance")
        }else{
            const {data} = await axios.post(`http://localhost:5000/add/cart`, {mobile:currentUser.name, rev, price, name, income, image, balance, ref})
            if(data.status === true){
                toast.success(data.msg)
            }else{
                toast.error(data.msg)
            }
        }
    }

    useEffect(()=>{
        fetchProducts()
        // totalCart()
        userWallet()
    },[])



  return (
    <div>
            <Toaster position="top-right" richColors/>
        <div className="productHeroSection flex items-center justify-center text-center p-3">
            <h3>Invest on our product to Earn daily Income! </h3>
        </div>

        {products.map((p, i)=>(
            <div key={i} className="flex justify-center items-center wrap my-5 gap-3">
    
                <div className="productCard flex justify-around items-center gap-2">
                    <div className="">
                        <img src={p.image} alt="" width={80}/>
                    </div>
                    <div className="">
                        <p className="my-1">{p.product_name}</p>
                        <div className="flex gap-1 flex-col">
                            <small>price: &#8358;{Intl.NumberFormat().format(p.price)}</small> 
                            <small>Income: &#8358;{Intl.NumberFormat().format(p.income)}</small> 
                        </div>
                        <div className="flex flex-start gap-1 my-2 flex-col">
                            <small>Revenue: &#8358;{Intl.NumberFormat().format(p.revenue)}</small> 
                            <small>Exp: 50days</small> 
                        </div>
                        <button 
                            className="py-1 btn btn-primary"
                            onClick={()=>{buyProduct(p.revenue, p.price, p.product_name, p.income, p.image)}}
                        >Buy</button>
                    </div>
                </div>
    
                
            </div>

        ))     
    }

        <BottomNav/>
    </div>
  )
}

export default ProductPage
