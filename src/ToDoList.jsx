import PropTypes from 'prop-types';
function ToDoList(props){
    /**
     * @function deleteTask
     * @param {number} index An index of an element that has to be deleted.
     * @description The function uses a built-in filter() method to remove the specified task (using
     * its index) and updates the current list with a setter function.
     */
    function deleteTask(index){
        const updatedTasks = props.items.filter((_, i) => i !== index);
        props.setItems(updatedTasks);
    }

    /**
     * @function moveTaskUp
     * @param {number} index An index of an element that has to be moved up.
     * @description This function checks if an index equals 0 (not allowing to move such element).
     * Destructures the current array of tasks and swaps the current and the previous element in
     * order to move it up. Uses a setter function to update the list.
     */
    function moveTaskUp(index){
        if(index > 0) { //if not on the top
            const updatedTasks = [...props.items];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            props.setItems(updatedTasks);
        }
    }

    /**
     * @function moveTaskDown
     * @param {number} index An index of an element that has to be moved down.
     * @description This function checks if an index is less than the last element's (not allowing
     * to move such element down). Destructures the current array of tasks and swaps the current
     * and the next element in order to move it down. Uses a setter function to update the list.
     */
    function moveTaskDown(index){
        if(index < props.items.length - 1) {
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
ToDoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    setItems: PropTypes.func.isRequired
}
ToDoList.defaultProps = {
    items: [],
    setItems: () => {}
}
export default ToDoList;