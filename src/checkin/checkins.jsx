import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import BottomNav from '../components/bottomnav';

const CheckinPage = () => {
    return (

        <div >
            
                <div style={{minHeight:"100vh"}} className='flex flex-col justify-center items-center gap-2'>
                <p className='text-center'>Visit here daily to <br/> claim your reward</p>
                <PlaylistAddCheckCircleIcon style={{fontSize:100}} />
                <button>Checkin</button>
            </div>
            <BottomNav/>
        </div>
        
    );
}
 
export default CheckinPage;