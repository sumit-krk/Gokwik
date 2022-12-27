import CardButton from '../CardButton/CardButton';
import styles from './Card.module.css'
const Card=(props)=>{
    // console.log(props)
    return <>
        <div className={styles.main_div_of_card}>
            {/* small horizontal line part of card */}
            <div className={styles.small_horizontal_div}>

            </div>

            {/* middle par of card */}
            <div className={styles.middle_div_of_card}>

                {/* company icon */}
                <div className={styles.avatar_div}>
                    <img src={props.LogoLink} alt="BigCo Inc. logo" className={styles.avatar}/>
                </div>

                {/* company tech part */}
                <div className={styles.details_of_job_middle_div}>
                    <div style={{display:'flex'}}>
                        <div>{props.Title}</div>
                        {props.Show=='true'?<div style={{marginLeft:'6px', color:'white',backgroundColor:'teal',padding:'1px 8px',borderRadius:'10px', fontWeight:'normal'}}>New!</div>:''}
                        {props.Show=='true'?<div style={{marginLeft:'6px', color:'white',backgroundColor:'black',padding:'1px 8px',borderRadius:'10px', fontWeight:'normal'}}>Fetured</div>:''}
                    </div>
                    <div>{props.JobRole}</div>
                    <div className={styles.details_of_job}>
                        <span>{props.JobDetails[0]}</span>
                        <span className={styles.dot_in_card}></span>
                        <span>{props.JobDetails[1]}</span>
                        <span className={styles.dot_in_card}></span>
                        <span>{props.JobDetails[2]}</span>
                    </div>
                </div>

            </div>
            {/* last part of card(listed tech list) */}
            <div className={styles.tech_section}>
                {/* <div className={styles.horizontal_line} /> */}
                {props.TechStacks.map((e) => <CardButton TechStacks={e} />)}
            </div>
        </div>
    </>
}
export default Card;