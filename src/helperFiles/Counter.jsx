import React from 'react';
import './Counter.css'


const Counter = ({ fruitObject, increment, decrement, fruitImageObject, reset }) => {

  return (
    <div>
      {Object.keys(fruitObject).map((fruit) => {
        return (
          <div key={fruit} className='container-that-maps'>
            <div className='folder-for-fruits'>
              <div className='fruit-container flex_it'>
                <div className='fruit-image'>
                  <p>{fruitImageObject[fruit]} </p>
                </div>
                <div className='exact-name'>
                  <p>{fruit}: </p>
                </div>

              </div>
              <button onClick={() => decrement(fruit)}>
                -
              </button>
              <div className='flex_it '>
                <div>
                  <p  >{fruitObject[fruit]}</p>
                </div>
              </div>
              <button onClick={() => {
                increment(fruit);
              }}>
                +
              </button>
            </div>

          </div>
        )
      })}
      <button onClick={reset} className='reset-btn'>Reset</button>

    </div>
  );
};

export default Counter;