import BottomNav from "../components/bottomnav"
import "./product.css"

const ProductPage = () => {
  return (
    <div>

        <div className="productHeroSection flex items-center justify-center text-center p-3">
            <h3>Invest on our product to Earn daily Income! </h3>
        </div>

        <div className="flex justify-center items-center wrap my-5 gap-3"> 
            <div className="productCard flex justify-start items-center gap-2">
                <div className="">
                    <img src="/assets/d1.png" alt="" width={80}/>
                </div>
                <div className="">
                    <p className="my-1">Pro max city mm05</p>
                    <div className="flex gap-3">
                        <small>price: 60000</small> 
                        <small>Income: 1000</small> 
                    </div>
                    <div className="flex gap-3 my-2">
                        <small>Revenue: 9000</small> 
                        <small>Exp: 50days</small> 
                    </div>
                    <button className="">Buy</button>
                </div>
            </div>
            <div className="productCard flex justify-start items-center gap-2">
                <div className="">
                    <img src="/assets/d1.png" alt="" width={80}/>
                </div>
                <div className="">
                    <p className="my-1">Pro max city mm05</p>
                    <div className="flex gap-3">
                        <small>price: 60000</small> 
                        <small>Income: 1000</small> 
                    </div>
                    <div className="flex gap-3 my-2">
                        <small>Revenue: 9000</small> 
                        <small>Exp: 50days</small> 
                    </div>
                    <button className="">Buy</button>
                </div>
            </div>
            <div className="productCard flex justify-start items-center gap-2">
                <div className="">
                    <img src="/assets/d1.png" alt="" width={80}/>
                </div>
                <div className="">
                    <p className="my-1">Pro max city mm05</p>
                    <div className="flex gap-3">
                        <small>price: 60000</small> 
                        <small>Income: 1000</small> 
                    </div>
                    <div className="flex gap-3 my-2">
                        <small>Revenue: 9000</small> 
                        <small>Exp: 50days</small> 
                    </div>
                    <button className="">Buy</button>
                </div>
            </div>
            <div className="productCard flex justify-start items-center gap-2">
                <div className="">
                    <img src="/assets/d1.png" alt="" width={80}/>
                </div>
                <div className="">
                    <p className="my-1">Pro max city mm05</p>
                    <div className="flex gap-3">
                        <small>price: 60000</small> 
                        <small>Income: 1000</small> 
                    </div>
                    <div className="flex gap-3 my-2">
                        <small>Revenue: 9000</small> 
                        <small>Exp: 50days</small> 
                    </div>
                    <button className="">Buy</button>
                </div>
            </div>
            <div className="productCard flex justify-start items-center gap-2">
                <div className="">
                    <img src="/assets/d1.png" alt="" width={80}/>
                </div>
                <div className="">
                    <p className="my-1">Pro max city mm05</p>
                    <div className="flex gap-3">
                        <small>price: 60000</small> 
                        <small>Income: 1000</small> 
                    </div>
                    <div className="flex gap-3 my-2">
                        <small>Revenue: 9000</small> 
                        <small>Exp: 50days</small> 
                    </div>
                    <button className="">Buy</button>
                </div>
            </div>
            <div className="productCard flex justify-start items-center gap-2">
                <div className="">
                    <img src="/assets/d1.png" alt="" width={80}/>
                </div>
                <div className="">
                    <p className="my-1">Pro max city mm05</p>
                    <div className="flex gap-3">
                        <small>price: 60000</small> 
                        <small>Income: 1000</small> 
                    </div>
                    <div className="flex gap-3 my-2">
                        <small>Revenue: 9000</small> 
                        <small>Exp: 50days</small> 
                    </div>
                    <button className="">Buy</button>
                </div>
            </div>
        </div>

        <BottomNav/>
    </div>
  )
}

export default ProductPage
