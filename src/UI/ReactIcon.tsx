import { IconContext } from "react-icons"

type Props = {
	value: IconContext
	icon: React.ReactNode
}

const UIReactIcon: React.FC<Props> = ({ icon, value }) => {
	return (
			<IconContext.Provider value={{ ...value }}>
				{icon}
			</IconContext.Provider>
	)
}

export default UIReactIcon
