import React from "react";
import "./todo.css"



const TodoList = (props) => {

    return (
        <div>
            <div className="todo_style">
                <button
                    className="fa_times"
                    onClick={() => {
                        props.onDlt(props.id)
                    }}
                >
                    X
                </button>
                <input type="checkbox" className="dataInput" id={props.id}/>
                <li >{props.val}</li>
            </div>
        </div>
    )
}


export default TodoList;