import './App.css'
import { useState } from "react";
import Counter from "./helperFiles/Counter.jsx";
import FormToFill from './helperFiles/FormToFill';

function App() {
  const fruitStocksToStart = {
    apples: 0,
    bananas: 0,
    kiwis: 0,
    strawberries: 0,
  };

  const [fruits, setFruits] = useState(fruitStocksToStart)

  const [fruitImage, setFruitImage] = useState
    ({
      apples: '🍏',
      bananas: '🍌',
      strawberries: '🍓',
      kiwis: '🥝',
    });

  function reset() {
    setFruits(fruitStocksToStart)
  }

  function fruitIncrement(fruit) {

    setFruits((prevState) => ({
      ...prevState,
      [fruit]: prevState[fruit] + 1
    }),

    )
    // fruit.style.backgroundColor = 'red';
    console.log("Incrementing the number!");
  }

  function fruitDecrement(fruit) {
    if (fruits[fruit] > 0) {
      setFruits((prevState) => ({
        ...prevState,
        [fruit]: prevState[fruit] - 1
      }))
    }
  }



  return (
    <>
      <div className='container-for-all'>
        <h1 className='company-name'>Fruitmand bezorgservice!!</h1>
        <Counter reset={reset} fruitObject={fruits} fruitImageObject={fruitImage} increment={fruitIncrement} decrement={fruitDecrement} />
        <FormToFill />
      </div>
    </>
  )
}

export default App;