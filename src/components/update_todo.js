import { useState } from "react";

function UpdateTodo(){

    const [title, SetTitle] = useState("")
    const [decsription, SetDescription ] = useState("")
    const [status, SetStatus] = useState("")
    const [priority, SetPriority] = useState("")

    return (
        <div>
        <form>
            <input type="text" placeholder="Enter title" value={title} onChange={e => SetTitle(e.target.value)}></input>
            <input type="text" placeholder="Enter description" value={decsription} onChange={e => SetDescription(e.target.value)}></input>
            <input type="number" placeholder="Enter status" value={status} onChange={e => SetStatus(e.target.value)}></input>
            <input type="number" placeholder="Enter priority" value={priority} onChange={e => SetPriority(e.target.value)}></input>
            <input type="submit"></input>
        </form>
        </div>
    )
}

export default UpdateTodo;