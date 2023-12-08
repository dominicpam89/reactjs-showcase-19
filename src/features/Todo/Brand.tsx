import { Link } from "react-router-dom"

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className: string
}

const TodoBrand:React.FC<Props> = (props) => {
	return (
		<>
			<div id="brand">
				<Link to="/welcome">
					<img src="/logo/logo-white-sm.png" {...props} />
				</Link>
			</div>
		</>
	)
}

export default TodoBrand
