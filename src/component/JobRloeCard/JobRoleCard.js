import Card from '../Card/Card';
import styles from './JobRoleCard.module.css'
import Data from "../../db.json";
const JobRoleCard=()=>{
    return <>
        <div className={styles.main_body}>
            <div>
                {/* <input /> */}
            </div>
            {Data.map((Data)=> <Card Title={Data.Title} TechStacks={Data.TechStacks}  />)}
        </div>
    </>
}
export default JobRoleCard;