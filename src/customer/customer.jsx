import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BottomNav from '../components/bottomnav';


const CustomerPage = () => {
    return (

        <div className="p-3">
            <h1 className="text-md text-center mt-5">Customer Care</h1>
            <p>You can reach us on the following platform if you have any issue or want to confirm your payment. <br/> We are Available 24/7</p>
            <div className='flex justify-center items-center gap-3 mt-5'>
                <Link to={''} className='flex gap-1 flex-col justify-center items-center'> 
                    <TelegramIcon/>
                    <small>Telegram</small>
                </Link>
                <Link to={''} className='flex gap-1 flex-col justify-center items-center'> 
                    <WhatsAppIcon/>
                    <small>Whatsapp</small>
                </Link>
            </div>
            <BottomNav/>
        </div>

    );
}
 
export default CustomerPage;