<<<<<<< HEAD


const Register = () => {
=======
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
    return (
        <div>
            <form className="form">
                <h2>Register</h2>
<<<<<<< HEAD
                <li>
=======
                
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
                    <label className="form-control">
                        Email:
                        <input type="email" id="email"></input>

<<<<<<< HEAD
                    </label>
                </li>
                <li>
=======
                    </label><br></br>
                
                
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
                

            </form >
            <button className="register-btn2" onClick="click">Register</button></div>
=======
                
                

            </form >
            <button className="register-btn2" onClick={() => {navigate("/")}}>Register</button></div>
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
    )
}

export default Register;