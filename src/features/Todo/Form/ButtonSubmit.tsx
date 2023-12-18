interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

const ButtonSubmit:React.FC<Props> = ({...defaultProps}) => {
	return (
		<button
			{...defaultProps}
			type="submit"
			className="w-full px-3 py-2 rounded-sm text-sm bg-primary-main-color text-primary-main-contrast disabled:bg-primary-main-color/40 disabled:text-primary-main-contrast/40"
		>
			Submit
		</button>
	)
}

export default ButtonSubmit