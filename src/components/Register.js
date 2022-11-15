import { useState, useEffect } from "react"
import axios from "axios"

const Register = () => {

    
    const [user, setUser] = useState ({
        email: "",
        username: "",
        password: ""
    })

    /*const fetchRegistration = async () => {
        const response = await fetch("http://localhost:6001/user")
        const data = await response.json()

        setUser(data)
    }

    useEffect(() => {
        fetchRegistration()
    }, [])
*/

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({...user, [name]: value})
        console.log(user.username)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)

        // här ska vi göra error hantering
        // tex att man ska fylla i alla fält eller om en user redan är registrerad.

        axios
        .post("http://localhost:6001/users", user).then(alert("User created"))//Fixa någon slags redirect

        setUser({
            email: "",
            username: "",
            password: ""
        })

    }

    return (
        <div>
            <form className="form">
                <h2>Register</h2>

                <label className="form-control">
                    Email:
                    <input type="email" id="email" name="email" value={user.email} onChange={handleChange}></input>

                </label><br></br>


                <label className="form-control">
                    Username:
                    <input type="text" id="username" name="username" value={user.username} onChange={handleChange}></input>

                </label><br></br>


                <label className="form-control">
                    Password:
                    <input type="password" id="password" name="password" value={user.password} onChange={handleChange}></input>
                </label>



            </form >
            <button className="register-btn2" type="submit" onClick={handleSubmit}>Register</button></div>
    )
}

export default Register;