function ToDoList(props){
    
    function deleteTask(index){
        const updatedTasks = props.items.filter((_, i) => i !== index);
        props.setItems(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0) { //if not on the top
            const updatedTasks = [...props.items];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            props.setItems(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < props.items.length - 1) { //if not on the bottom
            const updatedTasks = [...props.items];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            props.setItems(updatedTasks);
        }
    }

    return(
        <>
            <ol>
                {props.items.map((task, index) => 
                <li key={index}>
                    <span className="text" data-test="task">{task}</span>
                    <button className="delete-button"
                            onClick={() => deleteTask(index)} data-test="delete">
                        Delete
                    </button>
                    <button className="move-button"
                            onClick={() => moveTaskUp(index)} data-test="up">
                        ☝🏻
                    </button>
                    <button className="move-button"
                            onClick={() => moveTaskDown(index)} data-test="down">
                        👇🏻
                    </button>
                </li>)}
            </ol>
        </>);
}
export default ToDoList;