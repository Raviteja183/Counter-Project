import React, {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(c => c+1);
    }
    const decrement = () =>{
        setCount(c => c-1);
    }
    return(
        <div>
             <h1 className="number">Count : {count}</h1>
             <section className='btns-container'>
               <button className='btn' onClick={increment}>Increment</button>
               <button className='btn' onClick={decrement}>Decrement</button>
             </section>    
        </div>
    );
}
export default Counter
