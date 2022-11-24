import { useNavigate } from "react-router-dom"
import Text from "./Text"

const Choice2 = () => {

    const navigate = useNavigate()
    return (

        <div className="choice2">
        <div className="choice-btn">
            <Text />
            <button className="choice-btn1" onClick={() => { navigate("/Death2") }}><p>This way</p></button>
            <button className="choice-btn2" onClick={() => { navigate("/Choice3") }}><p>This way</p></button>
            <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
       
        </div>
        </div>

    )
}
export default Choice2;