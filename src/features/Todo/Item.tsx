import { TypeTodo } from "../../data/types/query";

const TodoItem:React.FC<{todo:TypeTodo}> = ({todo}) => {
  return <>
    <div id="container" className="w-full grid grid-cols-3">
      <span>{todo.image}</span>
      <span>{todo.information.todo}</span>
      <span>{todo.information.date.getFullYear()}</span>
      <span>{todo.status}</span>
    </div>
  </>
}
 
export default TodoItem;