import { useForm, FieldErrors, FieldValues } from "react-hook-form"
import UIInputField from "../../UI/Form/InputField"

const TodoForm = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			tag: "",
			details: "",
			dateFinished: "",
			images: [],
		},
	})
	const onSubmit = (data:FieldValues)=>{
		console.log(data)
	}
	const onInvalid= (errors:FieldErrors)=>{
		console.log(errors)
	}
	return (
		<form
			className="w-full h-full p-10 flex flex-col space-y-4 bg-primary-main-contrast/90"
			onClick={(e) => e.stopPropagation()}
			onSubmit={handleSubmit(onSubmit,onInvalid)}
		>
			<UIInputField id="tag" label="Todo Title" register={register("tag")} />
			<UIInputField id="details" label="Description" />
		</form>
	)
}

export default TodoForm