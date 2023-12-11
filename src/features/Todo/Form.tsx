import { useForm, FieldErrors, FieldValues } from "react-hook-form"
// import { utilsTodoFormDefaultValues as defaultValues } from "../../data/utils/todoForm"
import UIModal from "../../UI/Modal"
import UIInputField from "../../UI/Form/InputField"
import UIInputFieldArea from "../../UI/Form/InputFieldArea"
import UIInputDateStd from "../../UI/Form/InputDateStd"
import TodoImageList from "./Form/ImageList"
import ButtonCancel from "./Form/ButtonCancel"
import ButtonSubmit from "./Form/ButtonSubmit"

const TodoForm = () => {
	const { register, handleSubmit, reset, setValue } = useForm()
	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}
	const onInvalid = (errors: FieldErrors) => {
		console.log(errors)
	}
	return (
		<UIModal padding="sm">
			<form
				className="w-full p-10 flex flex-col space-y-5 bg-primary-main-contrast"
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit(onSubmit, onInvalid)}
			>
				<UIInputField
					id="tag"
					label="Todo Title"
					register={register("tag")}
				/>
				<UIInputFieldArea
					id="description"
					label="Description"
					rows={5}
					register={register("details")}
				/>
				<UIInputDateStd
					id="date"
					label="Target Finish"
					register={register("dateFinished")}
				/>
				<input type="text" className="hidden" {...register("image")} />
				<TodoImageList
					onImageSelect={(imageName) => setValue("image",imageName)}
				/>
				<div
					id="form-action"
					className="w-full pt-4 flex flex-row space-x-2"
				>
					<ButtonCancel reset={reset} />
					<ButtonSubmit />
				</div>
			</form>
		</UIModal>
	)
}

export default TodoForm
