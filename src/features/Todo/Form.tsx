import { useForm, FieldErrors, FieldValues } from "react-hook-form"
import { utilsTodoFormDefaultValues as defaultValues, getFormDate } from "../../data/utils/todoForm"
import UIModal from "../../UI/Modal"
import UIInputField from "../../UI/Form/InputField"
import UIInputFieldArea from "../../UI/Form/InputFieldArea"
import UIInputDateStd from "../../UI/Form/InputDateStd"
import UIInputImageSelect from "../../UI/Form/InputImageSelect"
import ButtonCancel from "./Form/ButtonCancel"
import ButtonSubmit from "./Form/ButtonSubmit"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"

const TodoForm = () => {
	const {modal} = useContext(ContextMain)
	const { register, handleSubmit, resetField, setValue, formState:{errors}, watch, trigger } = useForm({defaultValues, mode:"all"})
	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}
	const onInvalid = (errors: FieldErrors) => {
		console.log(errors)
	}
	const cancelForm = ()=>{
		resetField("tag")
		resetField("details")
		resetField("image")
		setValue("dateFinished",getFormDate(new Date()))
		modal.hide()
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
					register={register("tag", {
						required: "Must be filled!",
						pattern: {
							value: /[A-Za-z]{3,15}/g,
							message: "Must be more than 3 characters and less than 15",
						},
					})}
					error={errors.tag?.message}
				/>
				<UIInputFieldArea
					id="description"
					label="Description"
					rows={5}
					register={register("details", {
						validate: {
							base: (val) =>
								val.length <= 50 || `Maximum characters is ${50}`,
						},
					})}
					error={errors.details?.message}
					inputState={watch("details")}
					maxLength={50}
				/>
				<UIInputDateStd
					id="date"
					label="Target Finish"
					register={register("dateFinished", {
						required: "Must be selected!",
					})}
				/>
				<UIInputImageSelect
					register={register("image", {
						required: "Image must be selected",
					})}
					onImageSelect={(imageName) => {
						setValue("image", imageName)
						trigger("image")
					}}
					error={errors.image?.message}
				/>
				<div
					id="form-action"
					className="w-full pt-4 flex flex-row space-x-2"
				>
					<ButtonCancel onClick={cancelForm} />
					<ButtonSubmit />
				</div>
			</form>
		</UIModal>
	)
}

export default TodoForm
