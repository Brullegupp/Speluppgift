import { useNavigate } from "react-router-dom"

const Menu = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Escape the woods</h1>
            <button className="play-btn" onClick={() => { navigate("/Story") }}>Play</button><br></br>
            <button className="logout-btn" onClick={() => { navigate("/") }}>Log out</button>
        </div>
    )
}
export default Menu;