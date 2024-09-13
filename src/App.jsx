import Form from './Form.jsx';
import React, {useEffect} from 'react';
/**
 * @author sleeplessglory <sleeplessglory@outlook.com>
 * @version 1.0.0 is available to run from GitHub Pages: {@link https://sleeplessglory.github.io/to-do-list}
 * and to clone from the GitHub repository via: {@link https://github.com/sleeplessglory/to-do-list}
 * @copyright sleeplessglory 2024
 * 
 * @component
 * @function App
 * @returns {JSX.Element} A component (parent component for another component within)
 * @description This function stores a parent component for the application and has a useEffect() hook
 * to prevent from data loss while reloading or leaving the page. Check out the {@tutorial RunAndTest}
 * tutorial for developers.
 */
function App() {
    /**
     * @description This hook prevents from coincidental page reloads (or while leaving the page) by warning
     * users in a pop-up window (runs only on mount). So, users don't lose their current tasks.
     */
    useEffect(() => { //prevents from data loss when reloading or leaving the page
        window.onbeforeunload = () => true;
        return () => {
          window.onbeforeunload = null;
        };
    }, []); //runs only on mount
    return(
        <Form />
    );
}
export default App;
