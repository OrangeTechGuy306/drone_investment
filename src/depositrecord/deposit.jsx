import BottomNav from "../components/bottomnav";



const DepositPage = () => {

    return (
        <div className="p-2">
            <div className="mt-5 mb-3">
                <h3>Deposit Records</h3>
                <hr/>
            </div>
            <div>
                <div className="withCard p-3 my-2 rounded-md">
                    <small className="font-bold text-primary">890593829</small>
                    <h6 className="my-2">
                    Deposit: &#8358;<small>{Intl.NumberFormat().format(25235)}</small>{" "}
                    </h6>
                    <div className="flex justify-between">
                    <h6>
                        Type: <small className="text-danger">Deposit</small>
                    </h6>
                    </div>
                    <hr />
                    <small>{"12/12/2024"}</small>
                </div>
                <div className="withCard p-3 my-2 rounded-md">
                    <small className="font-bold text-primary">890593829</small>
                    <h6 className="my-2">
                    Deposit: &#8358;<small>{Intl.NumberFormat().format(25235)}</small>{" "}
                    </h6>
                    <div className="flex justify-between">
                    <h6>
                        Type: <small className="text-danger">Deposit</small>
                    </h6>
                    </div>
                    <hr />
                    <small>{"12/12/2024"}</small>
                </div>
                <div className="withCard p-3 my-2 rounded-md">
                    <small className="font-bold text-primary">890593829</small>
                    <h6 className="my-2">
                    Deposit: &#8358;<small>{Intl.NumberFormat().format(25235)}</small>{" "}
                    </h6>
                    <div className="flex justify-between">
                    <h6>
                        Type: <small className="text-danger">Deposit</small>
                    </h6>
                    </div>
                    <hr />
                    <small>{"12/12/2024"}</small>
                </div>
            </div>
            <BottomNav/>
        </div>
    );

}
 
export default DepositPage;