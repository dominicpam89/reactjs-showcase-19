import { useContext } from "react"
import UIModal from "../Modal"
import { ContextMain } from "../../data/context/main"

type Props = {
  onDelete: ()=>void
}

const UIDeleteConfirmation:React.FC<Props> = ({onDelete}) => {
  const {modalDeleteConfirmation:modalDelete} = useContext(ContextMain)
  return (
		<>
			<UIModal centered>
				<div
					id="container"
					className="p-8 space-y-2 justify-start bg-primary-main-contrast text-primary-main-color"
				>
					<div id="text" className="space-y-4 leading-10 py-3">
						<h2 className="text-xl font-semibold">Are you sure?</h2>
						<p className="text-sm font-light">
							This action cannot be undone
						</p>
					</div>
					<div id="action" className="w-full flex space-x-2">
						<button
							onClick={modalDelete.hide}
							className="w-full rounded-sm py-2 px-3 border border-primary-main-color/50"
						>
							Cancel
						</button>
						<button 
              onClick={()=>{
                modalDelete.hide()
                onDelete()
              }}
              className="w-full rounded-sm py-2 px-3 bg-primary-main-color text-primary-main-contrast"
            >
							Sure
						</button>
					</div>
				</div>
			</UIModal>
		</>
  )
}
 
export default UIDeleteConfirmation;