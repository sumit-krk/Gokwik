import header from '../../Gokiwik/header.jpg'
import styles from './MainHeader.module.css'
const MainHeader=()=>{
    return <>
       <div className={styles.top_Header}>
            <img src={header} height='100%' width='100%' />
       </div>
    </>
}
export default MainHeader;