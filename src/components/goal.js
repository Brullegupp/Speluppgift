import { useNavigate } from "react-router-dom"

const Goal = () => {

    const navigate = useNavigate()
    return (
        <div className="Goal">
        <h1>You made it!</h1>
        <button className="playagain-btn" onClick={() => { navigate("/choice1") }}>Play again</button><br></br>
        <button className="exit-btn" onClick={() => { navigate("/Menu") }}>Exit</button><br></br>
        </div>
    )
}
export default Goal;