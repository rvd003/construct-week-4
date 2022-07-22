import React from 'react'
import { useState } from 'react'
//  import "./todo.css"
import styles from "./AddTeam.module.css"
import AddTeamItem from './TodoItem';


const AddTeam = () => {
    const [values,setValues]=useState("")
    const [todoss, setTodoss] = useState([]);

    const onDelete=(id)=>{
       var newTodoss=todoss.filter(todos=>todos.id !==id);
        setTodoss(newTodoss)
    }
       

  return (
    <div className={styles.Tcontainer}>
       
         ADD YOUR TEAM MEMBER HERE
        <br />
        <hr/>
        
        <input className={styles.R} values={values}onChange={(e)=>setValues(e.target.value)} />
        
        <button
        onClick={()=>{
            setTodoss([
                ...todoss,
                {id:Date.now(),value:values,isComplete:false},
            ]);
            setValues("")
        }}
        >
           ADD
            </button>

            <div >
        {todoss.map((todoss)=> <AddTeamItem  key={todoss.id} todo={todoss} onDelete={onDelete}/>)}

    </div>
    </div>
  );
};

export default AddTeam