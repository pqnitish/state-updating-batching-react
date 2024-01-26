import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //setCount(count +1);
  // setCount((preValue) => {
  //  return preValue + 1;
  // });
  console.log(count); //here we will see the older value
  /*
    After updating the state, React will eventually re-render the component to reflect the new state.
     But this re-render doesn’t happen right away. It’s scheduled and managed by React's reconciliation process,
      which is why it seems asynchronous. So if we try to log the value of count right after calling setCount, 
      we'll still see the old value, not the updated one.
       This is because the update to count hasn't been applied yet—it's scheduled to happen later. 
       This process is known as batching. React batches multiple state updates for performance optimization.
     */
  /*Your task is to explain why count value is not updated to 3 as expected
  Expected Behaviour : count value being updated to 3
  Actual Behaviour : count value is 1
  - Each `setCount(count + 1)` call doesn't immediately update the `count`. They all see the same initial value of `count`.
- Due to React's batching, all these updates are processed together.
- As a result, `count` increases only by 1, not 3, even though `setCount` is called three times.
  */
  const handleClick = () => {
   // setCount(count + 1);
    //setCount(count + 1);
    //setCount(count + 1);
   // solution
   setCount(preCount=>preCount +1);
   setCount(preCount=>preCount +1);
   setCount(preCount=>preCount +1);
    console.log(count);
  };

  return (
    <>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
