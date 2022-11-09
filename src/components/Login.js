const Login = () => {
    return (
        <div className="divlogin">
            <form className="form">
                <h2 className="loginh2">Login</h2>

                <label className="form-control">
                    Username:
                    <input type="text" id="username"></input>

                </label>


                <label className="form-control">
                    Password:
                    <input type="password" id="password"></input>
                </label>

                <input type="submit" value="Login"></input>

            </form >
            <button className="register-btn1" onClick="click">Register</button>
        </div>
    );

}




export default Login;