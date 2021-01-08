import React from 'react';
import Item from './Item';


const Item = () => {

const [task, setTask] = useState('');
const [isCompleted, setStatus]


    return (

        <div>
            
            <form>
                onSubmit=(event) => {
                    event.preventDefault();
                    const todosCopy = [...tools];
                    todosCopy.push(value);
                    setTodos(todosCopy);
                }
            </form>

        </div>
//         <li>{task} {isCompleted}</li>
//         <button onClick={() =>setTask('Wash dishes')    }>
//             Click Me!
//             </button>
//             </li>
//     )
// }