import { FC } from 'react'
import Comment from './Comment'

interface PostProps {
  title: string
  text: string
  zhopa?: number
  myFn?: () => void
}

const Post: FC<PostProps> = ({ title, text, myFn }) => {
  return (
    <div>
      <h1 onClick={myFn} style={{ fontSize: 100, background: 'yellow' }}>
        {title} 
      </h1>
      <p>{text}</p>
      <Comment name="Ulian" text="text lalalaa" likes={1} />
      <Comment name="Artem" text="Artem lalalaa" likes={7} />
      <Comment likes={8} name="dsa;lfjdsa;lfjdsa;o" /> 
    </div> 
  )
}

export default Post
