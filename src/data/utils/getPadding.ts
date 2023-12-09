import { TypeCommonPadding } from "../types/common"

export const utilsGetPadding = (padding: TypeCommonPadding) => {
	let paddingVal = ""
	switch (padding) {
		case "sm":
			paddingVal = "p-10"
			break
		case "md":
			paddingVal = "p-16"
			break
		case "lg":
			paddingVal = "p-24"
			break
		default:
			paddingVal = "p-0"
			break
	}
	return paddingVal
}
