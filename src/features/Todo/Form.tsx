import { useForm } from "react-hook-form"
import {
	TypeTodoFormValues,
	utilsTodoFormDefaultValues as defaultValues,
	getFormDate,
	utilsGetTodoFormDefaultValuesEdit as defaultValuesEdit,
} from "../../data/utils/todoForm"
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
import { TypeTodo, TypeTodoUpdateArg } from "../../data/types/query"
import { UseMutationResult } from "@tanstack/react-query"

type Props = {
	todo?: TypeTodo
	todoUpdate?: UseMutationResult<void, Error, TypeTodoUpdateArg, void>
	onClose: ()=>void
}
const TodoForm:React.FC<Props> = ({todo=undefined, todoUpdate, onClose}) => {
	const {modalForm} = useContext(ContextMain)
	const {
		register,
		handleSubmit,
		resetField,
		setValue,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: todo ? defaultValuesEdit(todo) : defaultValues,
		mode: "all",
	})
	const {mutate:addTodo, isPending:isQueryPending, error:queryError, isError:isQueryError} = useHooksAddTodo()
	const onSubmit = async (data: TypeTodoFormValues) => {
		if(todo){
			todoUpdate?.mutate({data,todoId:todo.id})
			todoUpdate?.isPending ? null : onClose()
		}
		else addTodo(data)
	}
	const cancelForm = ()=>{
		if(todo) onClose()
		else {
			modalForm.hide()
			resetField("tag")
			resetField("details")
			resetField("image")
			setValue("dateFinished",getFormDate(new Date()))
		}
	}

	return (
		<UIModal padding="sm" onClick={todo?onClose:modalForm.hide}>
			<form
				className="w-full p-10 flex flex-col space-y-5 bg-primary-main-contrast"
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit(onSubmit)}
			>
				{isQueryError || todoUpdate?.isError && <LoaderError error={queryError} />}
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
					}}
					error={errors.image?.message}
					existedImage={todo?.image}
				/>
				<div
					id="form-action"
					className="w-full pt-4 flex flex-row space-x-2"
				>
					<ButtonCancel onClick={todo?onClose:cancelForm} disabled={isQueryPending||todoUpdate?.isPending} />
					<ButtonSubmit disabled={isQueryPending||todoUpdate?.isPending} />
				</div>
			</form>
		</UIModal>
	)
}

export default TodoForm
