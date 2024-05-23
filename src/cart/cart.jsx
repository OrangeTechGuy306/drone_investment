import BottomNav from "../components/bottomnav";

const CartPage = () => {
  return (

    <div>

        <div className="flex justify-around items-center py-3" style={{background:"var(--grey)"}}>
            <div className="text-center">
                <h4>70</h4>
                <small>Drones</small>
            </div>
            <div className="text-center">
                <h4>&#8358;{Intl.NumberFormat().format(872836)}</h4>
                <small>Daily Income</small>
            </div>
        </div>


      <div className="flex flex-col justify-center items-center gap-2 my-5">
        <div className="productCard flex justify-start items-center gap-2">
          <div className="">
            <img src="/assets/d1.png" alt="" width={80} />
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
          </div>
        </div>
        <div className="productCard flex justify-start items-center gap-2">
          <div className="">
            <img src="/assets/d1.png" alt="" width={80} />
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
          </div>
        </div>
        <div className="productCard flex justify-start items-center gap-2">
          <div className="">
            <img src="/assets/d1.png" alt="" width={80} />
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
          </div>
        </div>
      </div>
      <BottomNav/>
    </div>
  );
};

export default CartPage;
