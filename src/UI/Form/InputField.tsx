import { UseFormRegisterReturn } from "react-hook-form"
import UIInputHelperText from "./HelperText"

type Props = {
  id: string,
  label: string,
  type?: string
	register?:UseFormRegisterReturn
	error?: string | undefined,
}

const UIInputField:React.FC<Props> = ({id,label,type="text",register, error=undefined}) => {
	return (
		<>
			<div id="form-input-group" className="relative">
				<input
					type={type}
					id={id}
					className="block px-2.5 pb-2.5 pt-4 w-full text-sm 
              text-neutral-900 bg-transparent rounded-sm border border-gray-300 appearance-none
              dark:text-white dark:border-primary-600 dark:focus:border-primary-500
              focus:outline-none focus:ring-1 focus:border-1 focus:border-primary-600 peer"
					placeholder=""
					{...register}
				/>
				<label
					htmlFor={id}
					className="absolute top-2 origin-[0] px-2
            text-sm text-neutral-500 dark:text-neutral-300 duration-300 transform -translate-y-4 scale-75 
            bg-white dark:bg-gray-900
            peer-focus:px-2 peer-focus:text-primary-600 
            peer-focus:dark:text-primary-500 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
            peer-focus:start-4
            rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
				>
					{label}
				</label>
			</div>
			<UIInputHelperText text={error} />
		</>
	)
}

export default UIInputField
