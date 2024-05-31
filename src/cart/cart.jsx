import { useEffect, useState } from "react";
import BottomNav from "../components/bottomnav";
import axios from "axios";

const CartPage = () => {

  const [carts, setCarts] = useState([]);
  const [empty, setEmtpy] = useState("");
  const [total, setTotal] = useState(0);

  const getUserCarts = async () => {
    const user = JSON.parse(localStorage.getItem("altomaxx"))
    const { data } = await axios.get(`http://localhost:5000/cart/${user.name}`);
    if (data.status === true) {
      setCarts(data.msg);
    } else {
      setEmtpy(data.msg);
    }
  };

  const totalCart = async()=>{
    const currentUser = JSON.parse(localStorage.getItem("altomaxx"))
    const {data} = await axios.get(`http://localhost:5000/total/cart/${currentUser.name}`)

    if(data.status === true){
        setTotal(data.msg[0].total)
    }  else{
       console.log("error")
    }
  }

  useEffect(() => {
    getUserCarts();
    totalCart()
  }, []);


  return (

    <div>

        <div className="flex justify-around items-center py-3" style={{background:"var(--grey)"}}>
            <div className="text-center">
                <h4>{total}</h4>
                <small>Drones</small>
            </div>
            <div className="text-center">
                <h4>&#8358;{Intl.NumberFormat().format(872836)}</h4>
                <small>Daily Income</small>
            </div>
        </div>


      <div className="flex flex-col justify-center items-center gap-2 my-5">
      {empty === "" ? 
        carts.map((p, i)=>{
          <div key={i} className="productCard flex justify-start items-center gap-2">
            <div className="">
              <img src={p.image} alt="" width={80}/>
            </div>
            <div className="">
              <p className="my-1">{p.product_name}</p>
              <div className="flex gap-3">
                <small>price: &#8358;{Intl.NumberFormat().format(p.price)}</small>
                <small>Income: &#8358;{Intl.NumberFormat().format(p.income)}</small>
              </div>
              <div className="flex gap-3 my-2">
                <small>Revenue: &#8358;{Intl.NumberFormat().format(p.revenue)}</small>
                <small>Exp: 50days</small>
              </div>
            </div>
          </div> 
        }) 
        : 
        <div className="">
            <h1 className="text-white text-md">No jet Found{empty}</h1>
        </div> 
       }
      </div>

      <BottomNav/>
    </div>
  );
};

export default CartPage;
