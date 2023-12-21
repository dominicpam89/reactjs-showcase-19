import { useContext } from "react"
import { ContextMain } from "../../data/context/main"

type Props = {
	text:string|undefined
}

const UIInputHelperText:React.FC<Props> = ({text}) => {
	const isThemeInverted = useContext(ContextMain).theme.current.includes("invert")

	return <>
		{text!==undefined && <p className={`
			mb-4 -translate-y-2 text-xs font-normal text-left break-words hyphens-auto
			${isThemeInverted?"text-warning-main-contrast/80":"text-danger-main-color/80"}
		`}>
			{text}
		</p>}
	</>
	
}

export default UIInputHelperText
