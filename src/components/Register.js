import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Escape the woods</h1>
            <form className="form">
                <h2>Register</h2>
                <label className="form-control">
                    Email:
                    <input type="email" id="email"></input>
                </label><br></br>
               
                <label className="form-control">
                    Username:
                    <input type="text" id="username"></input>
                </label><br></br>
                
                <label className="form-control">
                    Password:
                    <input type="password" id="password"></input>
                </label>
            </form >
            <button className="register-btn2" onClick={() => { navigate("/Login") }}>Return</button>
            <button className="register-btn2" onClick={() => { navigate("/") }}>Register</button>
        </div>
    )
}

export default Register;