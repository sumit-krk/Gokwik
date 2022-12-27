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
        { value: "JAVA", label: "JAVA" },
        { value: "Jest", label: "Jest" },
        { value: "Mocha", label: "Mocha" },
        { value: "Blackbox", label: "Blackbox" },
        { value: "NodeJs", label: "NodeJs" },
        { value: "SQL", label: "SQL" },
        { value: "Express", label: "Express" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "ReactJs", label: "ReactJs" }
      ];

      const [searchData,setSearchData]=useState([]);
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
        console.log("new_data",new_data)
        let new_array=[];
        for(let i=0;i<Data.length;i++){
            for(let j=0;j<Data[i].TechStacks.length;j++){
                if(new_data.includes(Data[i].TechStacks[j])){
                    new_array.push((Data[i]));
                }
            }
        }
        let arr1=getUniqueListBy(new_array,'id')
        console.log("arr_1",arr1)
        setData(arr1)
      }

      const HandleSelect=(e)=>{
            console.log("e",e)
            if(e.length>0){
                handleSearch(e)
            }
            else{
                setSearchData([]); 
                setData(Data);
            }
      }

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
              onChange={HandleSelect}
            />
          </div>
          {data.map((Data) => (
            <Card Title={Data.Title} TechStacks={Data.TechStacks} />
          ))}
        </div>
      </>
    );
}
export default JobRoleCard;