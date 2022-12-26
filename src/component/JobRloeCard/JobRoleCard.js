import Card from '../Card/Card';
import styles from './JobRoleCard.module.css'
import Data from "../../db.json";
const JobRoleCard=()=>{
    return <>
        <div className={styles.main_body}>
            {Data.map(()=> <Card />)}
        </div>
    </>
}
export default JobRoleCard;