import { useNavigate } from "react-router-dom"

const Goal = () => {

    const navigate = useNavigate()
    return (
        <div className="Goal-background">
        <div className="Goal">
        <h1 className="congrats">Congratulations!<br></br>You have now escaped.</h1>
        <button className="playagain-btn" onClick={() => { navigate("/choice1") }}>Play again</button><br></br>
        <button className="exit-btn" onClick={() => { navigate("/Menu") }}>Exit</button><br></br>
        </div>
        </div>
    )
}
export default Goal;