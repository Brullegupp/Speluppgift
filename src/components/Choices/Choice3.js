import { useNavigate } from "react-router-dom"

const Choice3 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice3">
        <div className="choice-btn">
            <button className="choice-btn" onClick={() => { navigate("/choice4") }}>Arrow</button>
            <button className="choice-btn" onClick={() => { navigate("/Death1") }}>Arrow</button>
            <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
            </div>
            </div>
    )
}
export default Choice3;