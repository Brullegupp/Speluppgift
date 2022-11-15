import { useNavigate} from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState("")

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const checkUsername = (users) => {
        const user = users.find((user) => user.username === username)
        if(user.username === username) return user
        // lägga till password check med && user.password
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // kolla om det finns en user med samma epost
        // vi behöver skriva en funktion för att göra en check


        const user = axios.get("http://localhost:6001/users")
            .then((res) => checkUsername(res.data, username))
            .catch((error) => {
                alert("error")
            })
            console.log(user)
            console.log(user.username)

            if (user.username === username) {
                //alert("Success!")
                //navigate ("/Menu")


        // om login success ska vi spara user i localstorage
        localStorage.setItem("user", JSON.stringify(user.id))
            }

    }

    return (
        <div>
            <form className="form">
                <h2>Login</h2>
                    
                    <label className="form-control">
                        Username:
                        <input type="text" id="username" value={username} onChange={handleChange}></input>
                     
                    </label><br></br>
                    
                    <label className="form-control">
                        Password:
                        <input type="password" id="password"></input>
                    </label>
                    
                   
            
            </form>
            <button className="login-btn" type="submit" onClick={handleSubmit}>Login</button><br></br>
            <button className="register-btn1" onClick={() => {navigate("/Register")}}>Register</button>
        </div>
    )

}




export default Login;