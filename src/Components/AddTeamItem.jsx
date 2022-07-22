import React from 'react'
import styles from "./AddTeam.module.css"
import { useState } from 'react'

const AddTeamItem = ({todos,onDelete}) => {
    const [isCompleted,setIsCompleted] =useState(todos.isCompleted)
  return (
      <div >
    <div   key={todos.id}>
    <input className={styles.N} type="checkbox" 
    checked={isCompleted}
    onChange={(e)=>{
        setIsCompleted(e.target.checked)
    }}
    
    /> 
 <div className={isCompleted ? styles.striked:""}>{todos.value}</div>
 <button onClick={()=>onDelete(todos.id)}>Remove</button>
 </div>
 </div>
  )
}

export default AddTeamItem