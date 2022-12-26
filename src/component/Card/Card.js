import Com_logo_1 from '../../Gokiwik/Com_logo_1.jpg';
import styles from './Card.module.css'
const Card=()=>{
    return <>
        <div className={styles.main_div_of_card}>
            {/* small horizontal line part of card */}
            <div></div>

            {/* middle par of card */}
            <div>

                {/* company icon */}
                <div>
                    <img src={Com_logo_1} alt="BigCo Inc. logo"/>
                </div>

                {/* company tech part */}
                <div></div>

            </div>

            {/* last part of card(listed tech list) */}
            <div></div>
        </div>
    </>
}
export default Card;