import { BsBullseye } from "react-icons/bs"
import { BsCalendar2RangeFill } from "react-icons/bs"
import { BsFillHddRackFill } from "react-icons/bs"
import UIReactIcon from "../../UI/ReactIcon"

type CardProps = {
	icon?: React.ReactNode | null
	heading: string
	subheading: string
}
const Card: React.FC<CardProps> = ({ icon = null, heading, subheading }) => {
	const twClasses = {
		card: `flex flex-col space-y-4 items-center px-12 text-center`,
		text: `flex flex-col space-y-2`,
		icon: "w-14 h-auto text-primary-main-color",
		heading: `font-extrabold text-xl text-primary-main-color uppercase`,
		content: `font-normal text-sm tracking-wide text-primary-main-color`,
	}

	return (
		<>
			<div id="card" className={twClasses.card}>
				{icon !== null && (
					<UIReactIcon
						value={{ className: twClasses.icon }}
						icon={icon}
					/>
				)}
				<div id="text" className={twClasses.text}>
					<h2 className={twClasses.heading}>{heading}</h2>
					<p className={twClasses.content}>{subheading}</p>
				</div>
			</div>
		</>
	)
}

export default function HomeSection2() {
	const twClasses = {
		container: `w-full px-16 py-12 min-h-screen flex flex-col items-center justify-around space-y-8 bg-primary-main-contrast opacity-90`,
	}

	return (
		<>
			<div id="section-2" className={twClasses.container}>
				<Card
					heading="Customizable"
					subheading="Set the rules, define your own pace"
					icon={<BsBullseye />}
				/>
				<Card
					heading="Track the progress"
					subheading="See your growth over time with our analytics tools"
					icon={<BsCalendar2RangeFill />}
				/>
				<Card
					heading="Community Support"
					subheading="Join our community and get motivated by peers"
					icon={<BsFillHddRackFill />}
				/>
			</div>
		</>
	)
}
