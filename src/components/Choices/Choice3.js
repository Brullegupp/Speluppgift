import { useNavigate } from "react-router-dom"

const Choice3 = () => {

    const navigate = useNavigate()
    return (
        <div className="overlay3">
        <div className="choice-btn">
            <button className="choice-btn5" onClick={() => { navigate("/Goal") }}><p>This way</p></button>
            <button className="choice-btn6" onClick={() => { navigate("/death3") }}><p>This way</p></button>
            <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
        </div>
        </div>
    )
}
export default Choice3;