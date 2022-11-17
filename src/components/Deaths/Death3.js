import { useNavigate } from "react-router-dom"

const Death3 = () => {

    const navigate = useNavigate()
    return (
        <div className="death3">
        <h1>Game over</h1>
        <button className="playagain-btn" onClick={() => { navigate("/choice1") }}>Play again</button><br></br>
        <button className="exit-btn" onClick={() => { navigate("/Menu") }}>Exit</button><br></br>
        </div>
    )
}
export default Death3;