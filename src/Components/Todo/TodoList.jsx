import React from "react";
import "./todo.css"



const TodoList = (props) => {

    return (
        <div>
            <div className="todo_style">
                {/* <input type="checkbox" /> */}
                <button
                    className="fa_times"
                    onClick={() => {
                        props.onDlt(props.id)
                    }}
                >
                    X
                </button>
                <li >{props.val}</li>
            </div>
        </div>
    )
}


export default TodoList;