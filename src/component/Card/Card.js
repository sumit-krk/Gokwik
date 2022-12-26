import Com_logo_1 from '../../Gokiwik/Com_logo_1.jpg';
import styles from './Card.module.css'
const Card=()=>{
    return <>
        <div className={styles.main_div_of_card}>
            {/* small horizontal line part of card */}
            <div className={styles.small_horizontal_div}>

            </div>

            {/* middle par of card */}
            <div className={styles.middle_div_of_card}>

                {/* company icon */}
                <div>
                    <img src={Com_logo_1} alt="BigCo Inc. logo" className={styles.avatar}/>
                </div>

                {/* company tech part */}
                <div className={styles.details_of_job_middle_div}>
                    <div>Photoshop</div>
                    <div>Full stack Developer</div>
                    <div className={styles.details_of_job}>
                        <span>1d ago</span>
                        <span className={styles.dot_in_card}></span>
                        <span>Full Time</span>
                        <span className={styles.dot_in_card}></span>
                        <span>USA only</span>
                    </div>
                </div>

            </div>

            {/* last part of card(listed tech list) */}
            <div className={styles.tech_div_of_card}>
                <div>button_1</div>
                <div>button_1</div>
                <div>button_1</div>
                <div>button_1</div>
            </div>
        </div>
    </>
}
export default Card;