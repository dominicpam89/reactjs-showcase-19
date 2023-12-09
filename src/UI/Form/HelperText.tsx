type Props = {
	text:string|undefined
}

const UIInputHelperText:React.FC<Props> = ({text}) => {
	return <>
		{text!==undefined && <p className="mb-2 -translate-y-2 text-danger-400 text-xs font-normal px-3 text-right">
			{text}
		</p>}
	</>
	
}

export default UIInputHelperText
