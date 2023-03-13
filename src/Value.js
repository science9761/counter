import { useState } from "react";

function Value({counter,setCounter}) {
    const [value, setValue] = useState(5);

    function changeValue(state){
      setValue(Number(state.target.value))
    }
    return (
        <div>
            value:
            <input value={value} onChange={changeValue} />
            <button onClick={() => setCounter(counter - value)}>만큼감소</button>
            <button onClick={() => setCounter(counter + value)}>만큼증가</button>
        </div>
    )
}
export default Value;
