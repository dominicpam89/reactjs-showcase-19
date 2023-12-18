interface Props
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}
const ButtonCancel: React.FC<Props> = ({ ...defaultProps }) => {
	return (
		<button
			{...defaultProps}
			type="button"
			className="w-full px-3 py-2 rounded-sm text-sm border border-primary-main-color text-primary-main-color disabled:border-primary-main-color/40 disabled:text-primary-main-color/40"
		>
			Cancel
		</button>
	)
}

export default ButtonCancel
