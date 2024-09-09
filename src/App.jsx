import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";
function App() {
  let [calVal,setCalVal]=useState("");
  let onButtonClick=(buttonText)=>{
    if(buttonText==="C"){
      setCalVal("");
    }else if(buttonText==="="){
      let result=eval(calVal);
      setCalVal(result);
    }else{
      let newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }
    }
  return <div className={styles.calculator}>
   <Display DisplayValue={calVal}></Display>
   <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
  </div>
}

export default App
