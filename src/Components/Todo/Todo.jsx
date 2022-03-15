import React, { useState } from "react";
import "./todo.css"
import TodoList from "./TodoList";
import { Scrollbars } from "react-custom-scrollbars-2";




const Todo = () => {

    const [data, setData] = useState("");
    const [newData, setnewData] = useState([]);

    const inputEvent = (event) => {
        let data = event.target.value;
        // console.log(data);
        setData(data)
    }

    const listOfItem = () => {
        setnewData((oldValue) => {
            return [...oldValue, data]
        })
        setData("");
    }

    const deleteItems = (id) => {
        console.log("Deleted");
        setnewData((oldItem) => {
            return oldItem.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }



    return (
        <div>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add an Item"
                        onChange={inputEvent}
                        value={data}
                    />
                    <button className="btn" onClick={listOfItem}>+</button>
                    <br />
                    <br />
                    {/* <br /> */}
                    <div className="inner_card">
                        <Scrollbars>
                            <ol>

                                {newData.map((value, index) => {
                                    return (<TodoList key={index} id={index} val={value} onDlt={deleteItems} />)
                                })
                                }
                            </ol>
                         
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;