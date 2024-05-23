import BottomNav from "../components/bottomnav";
import "./record.css";

const WithdrawalRecords = () => {
  return (
    <div className="p-2">
        <div className="mt-5 mb-3">
            <h3>Withdrawal Records</h3>
            <hr/>
        </div>
      <div className="">
        <div className="withCard p-3 my-2 rounded-md">
          <small className="font-bold text-primary">{"orange"}</small>
          <h6 className="my-2">
            Withdraw: &#8358;<small>{Intl.NumberFormat().format(25235)}</small>{" "}
          </h6>
          <h6>
            Account NO: <small>{252352353}</small>
          </h6>
          <div className="flex justify-between">
            <h6>
              Type: <small className="text-danger">Withdrawal</small>
            </h6>
            <small className="text-secondary">{"pending"}</small>
          </div>
          <hr />
          <small>{"12/12/2024"}</small>
        </div>
        <div className="withCard p-3 my-2 rounded-md">
          <small className="font-bold text-primary">{"orange"}</small>
          <h6 className="my-2">
            Withdraw: &#8358;<small>{Intl.NumberFormat().format(25235)}</small>{" "}
          </h6>
          <h6>
            Account NO: <small>{252352353}</small>
          </h6>
          <div className="flex justify-between">
            <h6>
              Type: <small className="text-danger">Withdrawal</small>
            </h6>
            <small className="text-secondary">{"pending"}</small>
          </div>
          <hr />
          <small>{"12/12/2024"}</small>
        </div>
        <div className="withCard p-3 my-2 rounded-md">
          <small className="font-bold text-primary">{"orange"}</small>
          <h6 className="my-2">
            Withdraw: &#8358;<small>{Intl.NumberFormat().format(25235)}</small>{" "}
          </h6>
          <h6>
            Account NO: <small>{252352353}</small>
          </h6>
          <div className="flex justify-between">
            <h6>
              Type: <small className="text-danger">Withdrawal</small>
            </h6>
            <small className="text-secondary">{"pending"}</small>
          </div>
          <hr />
          <small>{"12/12/2024"}</small>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default WithdrawalRecords;
