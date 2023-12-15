import { useContext } from "react"
import { ContextMain } from "../data/context/main"
import { Toast, Toaster, toast } from "react-hot-toast"
import { BsFillTrash3Fill } from "react-icons/bs"

export const UINotificationPlacement = ()=>{
	const {theme} = useContext(ContextMain)
	const twClasses = {
		container: theme.current,
	}
	return (
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName={twClasses.container}
				toastOptions={{
					duration: 3000,
				}}
			/>
	)
}

type TypeNotification = {
	t: Toast
	message: string
}

const UINotification: React.FC<TypeNotification> = ({ t, message }) => {
	const container = "flex space-x-2 text-xs font-medium items-center"
	return (
		<div id="notification" className={container}>
			<span>{message}</span>
			<button onClick={() => toast.dismiss(t.id)}><BsFillTrash3Fill /></button>
		</div>
	)
}

export default UINotification
