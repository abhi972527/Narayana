import React, { useState } from "react";
import "./todo.css"



const TodoList = (props) => {
    //  State to strike the clicked list
    const [line, setLine] = useState(false)

    //  to strike the clicked list
    const cutIt = () => {
        if (line === false) {
            setLine(true)
        } else {
            setLine (false)
        }
    }

    return (
        <div>
            <div className="todo_style">
                <button
                    className="fa_times"
                    onClick={() => {
                        props.onDlt(props.id)
                    }}
                >
                    x
                </button>
                <input
                    type="checkbox"
                    className="dataInput"
                    onClick={cutIt} 
                    // onClick={() => {
                    //     props.tickInput(props.id)   
                    // }} 
                    />
                <li style={{ textDecoration : line ? 'line-through' : 'none' }} >{props.val}</li>
            </div>
        </div>
    )
}


export default TodoList;