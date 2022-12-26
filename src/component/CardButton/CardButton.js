import styles from '../Card/Card.module.css'
const CardButton = (props) => {
  return (<div className={styles.tech_div_of_card}>
        <div>{props.TechStacks}</div>
  </div>)
};
export default CardButton;
