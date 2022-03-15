import React, { useState } from "react";
import "./todo.css"
import TodoList from "./TodoList";
import { Scrollbars } from "react-custom-scrollbars-2";




const Todo = () => {
    //  state of data which user is typing
    const [data, setData] = useState("");
    //  state of newData, when adding task to list
    const [newData, setnewData] = useState([]);
    

    //  data which user is typing in input field
    const inputEvent = (event) => {
        let data = event.target.value;
        // console.log(data);
        setData(data)
    }

    //  adding data to the list
    const listOfItem = () => {
        if (blank(data)) {
            alert("Item input field can't be empty");
        } else {
            setnewData((oldValue) => {
                return [...oldValue, data]
            })
            setData("");
        }
    }

    //  if input field is blank, give alert message
    const blank = (data) => {
        return !data.trim().length;
    }

    //  If user delete any particular data
    const deleteItems = (id) => {
        // console.log("Deleted");
        setnewData((oldItem) => {
            return oldItem.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    //  To delete all the list available in the todo lists
    const clearList = () => {
        setnewData([])
        // console.log("Deleted All");
    }


    //  Not working
    const tickInput = () => {
        // console.log("Input Tick");
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
                    {/* <input type="date" />
                    <input type="time" /> */}
                    <button className="btn" onClick={listOfItem}>+</button>
                    <br />
                    <br />
                    <div className="inner_card">
                        <Scrollbars>
                            <ol>

                                {newData.map((value, index) => {
                                    return (<TodoList key={index} id={index} val={value} onDlt={deleteItems} inpTick={tickInput} />)
                                })
                                }
                            </ol>

                        </Scrollbars>
                    </div>

                    <button className="clear_btn" onClick={clearList}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;