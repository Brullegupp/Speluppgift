import { useNavigate } from "react-router-dom"

const Choice2 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice2">
        <div className="choice-btn">
            <button className="choice-btn" onClick={() => { navigate("/choice3") }}>Arrow</button>
            <button className="choice-btn" onClick={() => { navigate("/death2") }}>Arrow</button>
            <button className="exit-btn1" onClick={() => { navigate("/menu") }}>Exit</button>
        </div>
        </div>
    )
}
export default Choice2;