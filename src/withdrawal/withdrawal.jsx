import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useEffect, useState } from "react";
import BottomNav from "../components/bottomnav";
// import axios from "axios";
// import { toast } from "sonner";
// import { Modal } from "antd";

const UserWithdrawalPage = () => {
  const [bankType, setBankType] = useState("");
  // const [open, setOpen] = useState(false)
  // const [total, setTotal] = useState(false)

  const banks = [
    {
      id: "1",
      name: "Access Bank",
      code: "044",
    },
    {
      id: "2",
      name: "Citibank",
      code: "023",
    },
    {
      id: "3",
      name: "Diamond Bank",
      code: "063",
    },
    {
      id: "4",
      name: "Dynamic Standard Bank",
      code: "",
    },
    {
      id: "5",
      name: "Ecobank Nigeria",
      code: "050",
    },
    {
      id: "6",
      name: "Fidelity Bank Nigeria",
      code: "070",
    },
    {
      id: "7",
      name: "First Bank of Nigeria",
      code: "011",
    },
    {
      id: "8",
      name: "First City Monument Bank",
      code: "214",
    },
    {
      id: "9",
      name: "Guaranty Trust Bank",
      code: "058",
    },
    {
      id: "10",
      name: "Heritage Bank Plc",
      code: "030",
    },
    {
      id: "11",
      name: "Jaiz Bank",
      code: "301",
    },
    {
      id: "12",
      name: "Keystone Bank Limited",
      code: "082",
    },
    {
      id: "25",
      name: "Kuda",
      code: "112",
    },
    {
      id: "28",
      name: "Moniepoint",
      code: "116",
    },
    {
      id: "24",
      name: "Opay",
      code: "111",
    },
    {
      id: "13",
      name: "Providus Bank Plc",
      code: "101",
    },
    {
      id: "26",
      name: "Palmpay",
      code: "114",
    },
    {
      id: "14",
      name: "Polaris Bank",
      code: "076",
    },
    {
      id: "15",
      name: "Stanbic IBTC Bank Nigeria Limited",
      code: "221",
    },
    {
      id: "16",
      name: "Standard Chartered Bank",
      code: "068",
    },
    {
      id: "17",
      name: "Sterling Bank",
      code: "232",
    },
    {
      id: "18",
      name: "Suntrust Bank Nigeria Limited",
      code: "100",
    },
    {
      id: "19",
      name: "Union Bank of Nigeria",
      code: "032",
    },
    {
      id: "20",
      name: "United Bank for Africa",
      code: "033",
    },
    {
      id: "21",
      name: "Unity Bank Plc",
      code: "215",
    },
    {
      id: "22",
      name: "Wema Bank",
      code: "035",
    },
    {
      id: "23",
      name: "Zenith Bank",
      code: "057",
    },
  ];

  // const userWallet = async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:5000/user/wallet/${user.name}`
  //   );
  //   const bonus = await axios.get(`http://localhost:5000/ref/${user.referral}`);
  //   // console.log(data)
  //   // setRef(bonus.data.msg)
  //   if (data.status === true) {
  //     const balance = data.msg + bonus.data.msg.bonusSummary;
  //     setTotal(balance);
  //   } else {
  //     setTotal(data.msg);
  //     // console.log(data)
  //   }
  // };

  // const validateWithdrawal = (e) => {
  //   setInfo({ ...info, [e.target.name]: e.target.value });
  // };

  // // const balance = parseInt(total) + parseInt(ref)

  // const handleWithdrawal = async (e) => {
  //   if (
  //     bankType.trim() === "" ||
  //     amount === 0 ||
  //     account === 0 ||
  //     acc_name.trim() === ""
  //   ) {
  //     toast.error("all field are required to make withdrawal");
  //   } else if (amount < 2000) {
  //     toast.error("Minimum withdrawal is N2,000");
  //   } else if (amount > total) {
  //     toast.error("Insufficient Fund");
  //   } else {
  //     const { data } = await axios.post(`http://localhost:5000/withdrawal`, {
  //       amount,
  //       acc_name,
  //       account,
  //       bankType,
  //       mobile: user.name,
  //       ref,
  //     });
  //     userWallet();
  //     if (data.status === true) {
  //       toast.success(data.msg);
  //     } else {
  //       toast.error("something went wrong");
  //     }
  //   }
  // };

 
  useEffect(() => {
    // userWallet();
    // getreferralNetwork()
  }, []);

  return (
    <div className="p-3">
      <div className="flex gap-1 items-center p-3">
        <AccountBalanceWalletIcon />
        <small>&#8358;{Intl.NumberFormat().format(32897)}</small>
      </div>

      <div>
        <div className="">
          <select
            className="mt-5 form-control"
            onChange={(e) => {
              setBankType(e.target.value);
            }}
          >
            <option className="text-black">Choose Bank Type</option>
            {banks.map((bank, i) => (
              <option key={i} className="text-black">
                {bank["name"]}
              </option>
            ))}
          </select>

          <div className="flex justify-start items-center my-3">
            <p className="bg-silver text-lg mt-2 px-3">&#8358;</p>
            <input
              type="number"
              placeholder="Enter Amount to withdraw"
              name="amount"
              className="w-[265px] form-control"
              onChange={() => {}}
            />
          </div>
          <input
            type="text"
            placeholder="Enter Account Name"
            name="acc_name"
            className="w-[300px] my-3 form-control"
            onChange={() => {}}
          />
          <input
            type="number"
            placeholder="Enter Account NO."
            name="account"
            className="w-[300px] my-3 form-control"
            onChange={() => {}}
          />
          <button onClick={() => {}} className="btn btn-primary">
            Withdraw
          </button>
        </div>

        

        <div className="w-[450px] mx-auto my-5 p-3 withInstructionContainer">
          <h5 className="font-bold my-3">Withdrawal instructions</h5>
          <small>
            1. Minimum withdrawal amount ₦2,000 <br />
            2. The withdrawal fee is 10% of the withdrawal amount <br /> 3.
            Withdrawal time is from 9:00 to 24:00, you can withdraw money at any
            time.
            <br /> 4. Withdrawals will be credited within 24 hours. The Finance
            Department will review and process the funds submitted by users of
            the Fund Supervision Department within 12 hours. The remittance will
            be made only after approval.
            <br /> 5. The platform has a complete risk management system and
            strictly reviews and monitors every transaction to ensure the safety
            and compliance of your funds. <br />
            6. In order to protect the interests of the platform and members,
            you must have at least one device to activate the withdrawal
            function.
          </small>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default UserWithdrawalPage;
