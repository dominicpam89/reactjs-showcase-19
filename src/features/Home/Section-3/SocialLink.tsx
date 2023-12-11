import UIReactIcon from "../../../UI/ReactIcon"

// Social Link
interface SocialLinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	icon?: React.ReactNode | undefined
	text?: string|undefined
}

const Section3_SocialLink:React.FC<SocialLinkProps> = (props) => {
	const twClasses = {
		container: `w-full flex flex-row space-x-4 justify-around`,
		link: ``,
		icon: `w-auto h-6 text-primary-main-contrast opacity-80`,
	}
	return (
		<a {...props} className={twClasses.link}>
			{props.icon && <UIReactIcon
				icon={props.icon}
				value={{ className: twClasses.icon }}
			/>}
			{props.text||""}
		</a>
	)
}

export default Section3_SocialLink