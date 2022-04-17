// component layout
// state = something that is changing
import {useState} from "react";
const Button = (props) =>{
    const styles = {
    borderRadius: "10px",
    padding: "5px",
    border: "solid 2px",
    color: props.color,
    backgroundColor: props.backgroundColor
    }
    // function creates an array with buttonTxt as the inital value and 
    // setButtonTxt as the next value in the array as a method
    // array contains a let variable and a method for updating it
// const [buttonTxt, setButtonTxt] = useState("Click Me!");
// const handleButtonClick = () =>{
//     setButtonTxt("Clicked!");
// }
    return (
        <button onClick={props.handleButtonClick} style={styles} className="btn">
            {props.text}
            </button>
    )
}
export default Button;