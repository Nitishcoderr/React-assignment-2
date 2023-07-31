import { useState } from 'react';
import '../index.css';



const IncDec = () => {
    const [x, setX] = useState(0)
  return (
    <div className="main">
      <div className="card">
        <p>{x}</p>
        <div className="btn">
          <button onClick={()=>setX(x+1)} >Increment</button>
          <button onClick={()=>setX(x-1)} >Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default IncDec;
