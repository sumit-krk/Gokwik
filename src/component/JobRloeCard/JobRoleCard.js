import Card from '../Card/Card';
import styles from './JobRoleCard.module.css'
import Data from "../../db.json";
import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

const JobRoleCard=()=>{
    const animatedComponents = makeAnimated();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
      <>
        <div className={styles.main_body}>
          <div style={{width:'70%',margin:'auto'}}>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
            //   defaultValue={[colourOptions[4], colourOptions[5]]}
              isMulti
              options={options}
            />
          </div>
          {Data.map((Data) => (
            <Card Title={Data.Title} TechStacks={Data.TechStacks} />
          ))}
        </div>
      </>
    );
}
export default JobRoleCard;