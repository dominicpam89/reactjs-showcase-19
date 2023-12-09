import { useForm, FieldErrors, FieldValues } from "react-hook-form"
import { utilsTodoFormDefaultValues as defaultValues } from "../../data/utils/todoForm"
import UIModal from "../../UI/Modal"
import UIInputField from "../../UI/Form/InputField"
import UIInputFieldArea from "../../UI/Form/InputFieldArea"
import UIInputDateStd from "../../UI/Form/InputDateStd"
import TodoImageList from "./Form/ImageList"

const TodoForm = () => {
	const { register, handleSubmit } = useForm({ defaultValues })
	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}
	const onInvalid = (errors: FieldErrors) => {
		console.log(errors)
	}
	return (
		<UIModal padding="sm">
			<form
				className="w-full p-10 flex flex-col space-y-4 bg-primary-main-contrast"
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit(onSubmit, onInvalid)}
			>
				<UIInputField
					id="tag"
					label="Todo Title"
					register={register("tag")}
				/>
				<UIInputFieldArea id="description" label="Description" rows={5} register={register("details")} />
				<UIInputDateStd id="date" label="date" register={register("dateFinished")} />
				<TodoImageList />
			</form>
		</UIModal>
	)
}

export default TodoForm
