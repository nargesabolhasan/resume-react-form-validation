import { useEffect, useState, useCallback, memo, useRef } from "react";
import Button from "./Button";

function UseRefExample() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  let input1 = useRef();
  let input2 = useRef();

  const changeValue1 = useCallback(() => {
    setFirstInput(input1.current.value)
  }, [firstInput]);

  const changeValue2 = useCallback(() => {
    setSecondInput(input2.current.value)
  }, [secondInput]);


  return (
    <div className="App">
      <div className="value-1"  >
        first value: <h5>{firstInput}</h5>
        <br />
        change first value:
        <input ref={input1} type="text" />
        <Button onClick={changeValue1} children="change"/>
      </div>

      <div className="value-2"  >
        Second value: <h5>{secondInput}</h5>
        <br />
        change Second value:
        <input ref={input2} type="text" />
        <Button onClick={changeValue2} children="change"/>
      </div>
    </div>
  );
}
export default memo(UseRefExample);

