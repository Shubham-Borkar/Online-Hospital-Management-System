import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { BaseApi } from '../components/api/BaseApi';
import './mystyle.css'

function MyCard() {
    return (<div className="backimg bg-primary">
                    <img src={BaseApi.base_url+'assets/images/HospitalBack.jpg'} alt="Snow" style={{width:"100%"}}/>
                </div>);
}

export default MyCard;

