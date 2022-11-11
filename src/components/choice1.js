import { useNavigate} from "react-router-dom"

const Choice1 = () => {

const navigate = useNavigate()
return (
    <div className="choice-btn">
<button className="login-btn" onClick={() => {navigate("/choice2")}}>Arrow</button>
<button className="register-btn1" onClick={() => {navigate("/death1")}}>Arrow</button>
</div>
)}
export default Choice1;