<<<<<<< HEAD
const Menu = () => {
    return(
        <div>
            <h1>Escape the woods</h1>
            <li>
            <button className="play-btn" onClick="clickplay">Play</button>
            </li>
            <button className="logout-btn" onClick="logout">Log out</button>
=======
import { useNavigate } from "react-router-dom"

const Menu = () => {

    const navigate = useNavigate()

    return(
        <div>
            
    
            <button className="play-btn" onClick={() => {navigate("/")}}>Play</button><br></br>

            <button className="logout-btn" onClick={() => {navigate("/")}}>Log out</button>
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
        </div>
    )
}
export default Menu;