import ToDoList from './ToDoList.jsx';
import React, {useState} from 'react';
/**
 * @component
 * @function Form
 * @returns {JSX.Element} The form section with a header, input and button elements. Also returns
 * a child <ToDoList /> component.
 * @description Contains form elements, a header and passes props (a stateful variable and a setter
 * function) to a child <ToDoList /> component.
 */
function Form(){
    /**
     * @typedef {(string|function(string))}
     * @description 
     * newTask - A stateful variable containing a new task value for the list.
     * setNewTask - A setter function updating its value.
     */
    const [newTask, setNewTask] = useState("");

    /**
     * @typedef {(Array.<string>|function(Array.<string>))}
     * @description 
     * tasks - A stateful variable containing an array of tasks (to show within the list).
     * setTasks - A setter function updating the array of tasks.
     */
    const [tasks, setTasks] = useState([]);

    /**
     * @function handleInputChange
     * @param {Event} event An input event (when users type a new task).
     * @description This function uses a setter function with an input event in order to let users
     * type their tasks in the input field.
     */
    function handleInputChange(event){
        setNewTask(event.target.value); //we can now see the changes within the input box
    }

    /**
     * @function addTask
     * @description The function checks if a new task is a completely void string. Does not add a task
     * if so, otherwise adds a new task to an existing array of tasks with a setter function and sets
     * a default void value to the input field for the next tasks with.
     */
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
                <div className="elements" data-test="form">
                    <input className="list-input" 
                           type="text" 
                           placeholder="Enter a task" 
                           value={newTask} 
                           onChange={handleInputChange}
                           spellCheck={false}
                           data-test="new" />
                    <button className="list-button" onClick={addTask} data-test="add">Add</button>
                </div>
                <ToDoList items={tasks} setItems={setTasks} />
            </div>
        </>
    );
}
export default Form;