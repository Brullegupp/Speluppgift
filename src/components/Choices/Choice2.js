import { useNavigate } from "react-router-dom"

const Choice2 = () => {

    const navigate = useNavigate()
    return (
        <div className="overlay2">
        <div className="choice-btn">
            <button className="choice-btn3" onClick={() => { navigate("/choice3") }}><p>This way</p></button>
            <button className="choice-btn4" onClick={() => { navigate("/death2") }}><p>This way</p></button>
            <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
        </div>
        </div>
    )
}
export default Choice2;