import React from 'react'
import { useState } from 'react'
//  import "./todo.css"
import styles from "./todo.module.css"
import TodoItem from './TodoItem';


const Todo = () => {
    const [value,setValue]=useState("")
    const [todos, setTodos] = useState([]);

    const onDelete=(id)=>{
        let newTodos=todos.filter(todo=>todo.id !==id);
        setTodos(newTodos)
    }
       

  return (
    <div className={styles.container}>
       
         ADD YOUR TASK HERE
        <br />
        
        <input value={value}onChange={(e)=>setValue(e.target.value)} />
        
        <button
        onClick={()=>{
            setTodos([
                ...todos,
                {id:Date.now(),value:value,isComplete:false},
            ]);
            setValue("")
        }}
        >
            +
            </button>

            <div >
        {todos.map((todo)=> <TodoItem  key={todo.id} todo={todo} onDelete={onDelete}/>)}

    </div>
    </div>
  );
};

export default Todo