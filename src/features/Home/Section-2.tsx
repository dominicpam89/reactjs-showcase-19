import { useHooksMediaQuery } from "../../data/hooks/media-query"
import { IconContext } from "react-icons"
import { BsBullseye } from "react-icons/bs"
import { BsCalendar2RangeFill } from "react-icons/bs"
import { BsFillHddRackFill } from "react-icons/bs"

const HomeSection2 = () => {
	const desktopView = useHooksMediaQuery(`(min-width:768px)`)
	desktopView

	const twClasses = {
		container: `w-full px-16 py-12 h-screen flex flex-col items-center justify-around bg-primary-main-contrast`,
		card: `flex flex-col space-y-4 items-center px-12 text-center`,
		icon: { className: "w-14 h-auto text-primary-main-color"},
		cardHeading: `font-extrabold text-xl text-primary-main-color uppercase`,
		cardContent: `font-normal text-sm tracking-wide text-primary-main-color`,
	}

	return (
		<>
			<div id="section-2" className={twClasses.container}>
				<div id="card" className={twClasses.card}>
					<IconContext.Provider value={twClasses.icon}>
						<BsBullseye />
					</IconContext.Provider>
					<div id="text" className="flex flex-col space-y-2">
						<h2 className={twClasses.cardHeading}>Customizable</h2>
						<p className={twClasses.cardContent}>Set the rules, define your own pace</p>
					</div>
				</div>
				<div id="card" className={twClasses.card}>
					<IconContext.Provider value={twClasses.icon}>
						<BsCalendar2RangeFill />
					</IconContext.Provider>
					<h2 className={twClasses.cardHeading}>Track the progress</h2>
					<p className={twClasses.cardContent}>See your growth over time with our analytics tools</p>
				</div>
				<div id="card" className={twClasses.card}>
					<IconContext.Provider value={twClasses.icon}>
						<BsFillHddRackFill />
					</IconContext.Provider>
					<h2 className={twClasses.cardHeading}>Community Support</h2>
					<p className={twClasses.cardContent}>Join our community and get motivated by peers</p>
				</div>
			</div>
		</>
	)
}

export default HomeSection2
