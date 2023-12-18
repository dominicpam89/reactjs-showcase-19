import { useForm } from "react-hook-form"
import { TypeTodoFormValues, utilsTodoFormDefaultValues as defaultValues, getFormDate } from "../../data/utils/todoForm"
import UIModal from "../../UI/Modal"
import UIInputField from "../../UI/Form/InputField"
import UIInputFieldArea from "../../UI/Form/InputFieldArea"
import UIInputDateStd from "../../UI/Form/InputDateStd"
import UIInputImageSelect from "../../UI/Form/InputImageSelect"
import ButtonCancel from "./Form/ButtonCancel"
import ButtonSubmit from "./Form/ButtonSubmit"
import { LoaderError } from "../../UI/Loader"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { useHooksAddTodo } from "../../data/hooks/query"

const TodoForm = () => {
	const {modalForm} = useContext(ContextMain)
	const { register, handleSubmit, resetField, setValue, formState:{errors}, watch, trigger } = useForm({defaultValues, mode:"all"})
	const {mutate:addTodo, isPending:isQueryPending, error:queryError, isError:isQueryError} = useHooksAddTodo()
	const onSubmit = (data: TypeTodoFormValues) => {
		addTodo(data)
	}
	const cancelForm = ()=>{
		resetField("tag")
		resetField("details")
		resetField("image")
		setValue("dateFinished",getFormDate(new Date()))
		modalForm.hide()
	}

	return (
		<UIModal padding="sm" onClick={modalForm.hide}>
			<form
				className="w-full p-10 flex flex-col space-y-5 bg-primary-main-contrast"
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit(onSubmit)}
			>
				{isQueryError && <LoaderError error={queryError} />}
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
					<ButtonCancel onClick={cancelForm} disabled={isQueryPending} />
					<ButtonSubmit disabled={isQueryPending} />
				</div>
			</form>
		</UIModal>
	)
}

export default TodoForm
