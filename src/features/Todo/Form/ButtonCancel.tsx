interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}
const ButtonCancel:React.FC<Props> = ({...defaultProps}) => {
	return <button
		type="button"
		className="w-full px-3 py-2 rounded-sm text-sm border border-primary-main-color text-primary-main-color"
		{...defaultProps}
	>
		Cancel
	</button>
}

export default ButtonCancel