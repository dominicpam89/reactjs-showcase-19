type Props = {
	text:string|undefined
}

const UIInputHelperText:React.FC<Props> = ({text}) => {
	return <>
		{text!==undefined && <p className="mb-4 -translate-y-2 text-danger-main-color/80 text-xs font-normal text-left break-words hyphens-auto">
			{text}
		</p>}
	</>
	
}

export default UIInputHelperText
