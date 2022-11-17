import React, { useState } from 'react'

const Counter = () => {
  // let counter = 0;
  // const minus = document.querySelector('.minus');
  // const plus = document.querySelector('.plus');
  // minus?.addEventListener('click', () => {
  //   counter--
  // })
  const [myCounter, setMyCounter] = useState(7) // 0
  // myCounter - переменная
  // setMyCounter - функция, которая изменяет myCounter
  // setMyCounter(2)

  const minus = () => {
    setMyCounter(prev => prev - 1)
  }

  const plus = () => {
    setMyCounter(prev => prev + 1)
  }

  return (
    <div>
      <button onClick={minus}>Minus</button>
      <h1>{myCounter}</h1>
      <button onClick={plus}>Plus</button>
    </div>
  )
}

export default Counter
