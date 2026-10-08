import Task from "./components/Task/Task"
import Comment from './components/Comment/Comment';

function App() {
  const  dataTask = {
    id:1,
    text: 'learning',
    days:42,
    isDone:false
  }
  const dataComment = {
    id:1,
    content: 'cool',
    likeAmount:132,
    isNew: true,
  }
  return (
    
    <>
    <Task dataTask={dataTask}/>
    <Comment dataComment={dataComment} />
    </>
  )
}

export default App
