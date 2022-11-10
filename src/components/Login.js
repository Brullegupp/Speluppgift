<<<<<<< HEAD

const Login = () => {
=======
import { useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
    return (
        <div>
            <form className="form">
                <h2>Login</h2>
<<<<<<< HEAD
                    <li>
=======
                    
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
                    <label className="form-control">
                        Username:
                        <input type="text" id="username"></input>
                     
<<<<<<< HEAD
                    </label>
                    </li>
                    <li>
=======
                    </label><br></br>
                    
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
                    <label className="form-control">
                        Password:
                        <input type="password" id="password"></input>
                    </label>
<<<<<<< HEAD
                    </li>
                    <input type="submit" value="Login"></input>
            
            </form >
            <button className="register-btn1" onClick="click">Register</button>
=======
                    
                   
            
            </form>
            <button className="login-btn" onClick={() => {navigate("/Menu")}}>Login</button><br></br>
            <button className="register-btn1" onClick={() => {navigate("/Register")}}>Register</button>
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
        </div>
    )

}




export default Login;