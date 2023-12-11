import { UseFormRegisterReturn } from "react-hook-form"
import { TypeCommonPadding } from "./common"

export type TypeModalProps = {
	children: React.ReactNode
	centered?: boolean
	padding?: TypeCommonPadding
}

export interface TypeInput{
	id: string,
	label: string,
	error?: string | undefined
	register?: UseFormRegisterReturn
}

export interface TypeInputField extends TypeInput{
	type?: string
}

export interface TypeInputFieldArea extends TypeInput {
	rows?: number,
	inputState: string,
	maxLength?: number|undefined,
}

export interface TypeInputImageSelect{
	error?: string | undefined
	register?: UseFormRegisterReturn
	onImageSelect: (imageName:string)=>void
}
