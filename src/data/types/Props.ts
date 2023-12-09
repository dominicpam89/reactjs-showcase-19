import { TypeCommonPadding } from "./common"

export type TypePropsChildren = {
  children: React.ReactNode
}

export type TypeModalProps = {
	children: React.ReactNode
	centered?: boolean
	padding?: TypeCommonPadding
}