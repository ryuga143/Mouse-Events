import React, { useState } from 'react';

const Events = () => {

const [value, setValue] = useState(0);

const increment = () => {
    if(value>1){
        setValue(value)
    }
    setValue(value+1);
}

const decrement =()=>{
    if(value>0){
    setValue(value-1);
}
}

const reset=()=>{
    setValue(0)
}
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
 
export default Events;
