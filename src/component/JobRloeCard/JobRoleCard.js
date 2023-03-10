import Card from '../Card/Card';
import styles from './JobRoleCard.module.css'
import Data from "../../db.json";
import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const JobRoleCard=()=>{
    const animatedComponents = makeAnimated();
    const options = [
        { value: "Frontend", label: "Frontend" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "JavaScript", label: "JavaScript" },
        { value: "Ruby", label: "Ruby" },
        { value: "Senior", label: "Senior" },
        { value: "Midweight", label: "Midweight" },
        { value: "Python", label: "Python" },
        { value: "Sass", label: "Sass" },
        { value: "Ruby", label: "Ruby" },
        { value: "Backend", label: "Backend" },
        { value: "Junior", label: "Junior" },
        { value: "ReactJs", label: "ReactJs" },
        { value: "RoR", label: "RoR" },
        { value: "Vue", label: "Vue" },
        { value: "Djanjo", label: "Djanjo" }
      ];
      const [data,setData]=useState([...Data]);
      const demo=(data)=>{
        let obj_array=[];
        for(let i=0;i<data.length;i++){
            obj_array.push(data[i].value);  
        }
        return obj_array;
      }
      function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
      const handleSearch=(data)=>{
        let new_data=demo(data);
        let new_array=[];
        for(let i=0;i<Data.length;i++){
            for(let j=0;j<Data[i].TechStacks.length;j++){
                if(new_data.includes(Data[i].TechStacks[j])){
                    new_array.push((Data[i]));
                }
            }
        }
        let arr1=getUniqueListBy(new_array,'id')
        setData(arr1)
      }
      const HandleSelect=(e)=>{
            console.log("e",e)
            if(e.length>0){
                handleSearch(e)
            }
            else{
                setData(Data);
            }
      }
    return (
      <>
      <div style={{width:'76%', position:'relative',margin:'auto'}}>
            <div style={{width:'100%',position:'absolute',top:'-20px'}}>
            <Select
              components={animatedComponents}
              isMulti
              options={options}
              onChange={HandleSelect}
            />
            </div>
          </div>
        <div className={styles.main_body}>
          {data.map((Data) => (
            <Card Title={Data.Title} TechStacks={Data.TechStacks} JobRole={Data.JobRole} LogoLink={Data.LogoLink} JobDetails={Data.JobDetails} Show={Data.Show} />
          ))}
        </div>
      </>
    );
}
export default JobRoleCard;