import './MainCard.css'
import Com_logo_1 from '../../Gokiwik/Com_logo_1.jpg'
const MainCard=()=>{
    return <div style={{display:'flex'}} className='top_header'>
        <div>envato market</div>
        <button className='button'>Buy Now</button>
        <img src={Com_logo_1} alt="BigCo Inc. logo"/>
    </div>
}
export default MainCard;