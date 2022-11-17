import Post from './components/Post'
import Counter from './components/Counter/Counter'
import Todos from './components/Todos/Todos'
import { useState } from 'react'

const App = () => {
  const array = [
    {
      id: 1,
      text: 'wake up',
      checked: true,
    },
    {
      id: 2,
      text: 'wake up',
      checked: false,
    },
    {
      id: 3,
      text: 'wake up',
      checked: false,
    },
    // 'sadlfsdfjds'
  ]

  const [todosList, setTodosList] = useState(array)
  return (
    <div>
      {/* <Post title="Zhenya LOH" text="MY TEXT" zhopa={5} />
      <Post title="vlad" text="another text" />
      <Post title="artem" text="prodaet zhizki" myFn={() => console.log('1')} /> */}
      <Counter />
      <Todos />
    </div>
  )
}

export default App
