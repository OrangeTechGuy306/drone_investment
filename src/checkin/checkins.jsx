import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import BottomNav from '../components/bottomnav';
import axios from "axios"
import {toast, Toaster} from "sonner"


const CheckinPage = () => {

    const checkin = async()=>{
        const currentUser = JSON.parse(localStorage.getItem("altomaxx"))
        const {data} =  await axios.post(`http://localhost:5000/checkin/${currentUser.name}`)
        if(data.status === true){
            toast.success(data.msg)
        }else{
            toast.error(data.msg)
        }
    }
    return (

        <div>
            <Toaster position='top-right' richColors/>
            <div style={{minHeight:"100vh"}} className='flex flex-col justify-center items-center gap-2'>
                <p className='text-center'>Visit here daily to <br/> claim your reward</p>
                <PlaylistAddCheckCircleIcon style={{fontSize:100}} />
                <button className='text-white' onClick={checkin}>Checkin</button>
            </div>
            <BottomNav/>
        </div>
        
    );
}
 
export default CheckinPage;