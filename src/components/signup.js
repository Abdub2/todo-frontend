import { useState } from "react"

function Signup(){
    const [user_name, SetUsername] = useState("")
    const [email, SetEmail ] = useState("")
    const [password, SetPassword] = useState("")

    return (
        <div>
        <form>
            <input type="text" placeholder="User Name" value={user_name} onChange={e => SetUsername(e.target.value)}></input>
            <input type="text" placeholder="Email" value={email} onChange={e => SetEmail(e.target.value)}></input>
            <input type="text"placeholder="Password" value={password} onChange={e => SetPassword(e.target.value)}></input>
            <input type="submit"></input>
        </form>
        </div>
    )

}

