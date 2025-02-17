import { useState } from "react";

const MultiUserState = () => {
    let counterArr = [0, 0, 0];
    const [counter, setCounter] = useState(counterArr);
    const handleCounter = (i) => {
        const newCounterArr = counter.map((currCount, index) => {
            if (i === index) return currCount+1;
            else return currCount;
        })
        setCounter(newCounterArr);
    }
    return (
        <div>
            <ul>
                {
                    counter.map((count, i) => <li>{count} <button onClick={() => {handleCounter(i)}}>+1</button> </li>)
                }
            </ul>
        </div>
    );
};

export default MultiUserState;