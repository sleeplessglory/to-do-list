import ToDoList from './ToDoList.jsx';
import React, {useState} from 'react';
function Form(){
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value); //we can now see the changes within the input box
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }
    return(
        <>
            <div className="list">
                <h1>To-do list</h1>
                <div className="elements">
                    <input className="list-input" 
                           type="text" 
                           placeholder="Enter a task" 
                           value={newTask} 
                           onChange={handleInputChange}
                           spellCheck={false} />
                    <button className="list-button" onClick={addTask}>Add</button>
                </div>
                <ToDoList items={tasks} setItems={setTasks} />
            </div>
        </>
    );
}
export default Form;