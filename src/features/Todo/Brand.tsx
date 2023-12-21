import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextMain } from "../../data/context/main"

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className: string
}

const TodoBrand:React.FC<Props> = (props) => {
	const {theme} = useContext(ContextMain)
	const logoSrc =
		theme.current === "theme-default" || theme.current === "theme-relax"
			? "/logo/logo-white-sm.png"
			: theme.current === "theme-default-invert"
			? "/logo/logo-default-sm.png"
			: "/logo/logo-relax-sm.png"
	return (
		<>
			<div id="brand">
				<Link to="/welcome">
					<img src={logoSrc} {...props} />
				</Link>
			</div>
		</>
	)
}

export default TodoBrand
