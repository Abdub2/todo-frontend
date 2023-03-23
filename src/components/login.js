import {useState} from "react"

function Login(){
    const[user_name, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    
    return(
        <div>
            <form>
                <input type = "text" placeholder="Username" value= {user_name} onChange={e => SetUsername(e.target.value)}/>
                <input type="text"placeholder="Password" value={password} onChange={e => SetPassword(e.target.value)}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Login;