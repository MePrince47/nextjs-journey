import React from "react";

function TodoItem({ task , onDelete}){
    return(
        <li>
            {task}
            <button onClick={onDelete} style={{marginLeft: '10px',color:'red'}}>
                supprimer
            </button>
        </li>
    )
}

export default TodoItem;