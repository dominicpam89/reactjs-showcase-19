import { useContext } from "react"
import { ContextMain } from "../../data/context/main";
import UIModal from "../../UI/Modal";

const TodoForm = () => {
  const context = useContext(ContextMain)
  return <>
    <UIModal>
      <div id="container" className="p-24 flex flex-col items-center justify-center">
        <button className="px-4 py-2 bg-black text-white text-sm font-normal" onClick={e=>{
          e.stopPropagation()
          context.modal.hide()
        }}>Close</button>
      </div>
    </UIModal>
  </>
}
 
export default TodoForm;