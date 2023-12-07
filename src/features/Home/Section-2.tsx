import { useContext } from "react"
import { useHooksMediaQuery } from "../../data/hooks/media-query"
import { ContextMain } from "../../data/context/main"
import { IconContext } from "react-icons"
import { BsBullseye } from "react-icons/bs"
import { BsCalendar2RangeFill } from "react-icons/bs"
import { BsFillHddRackFill } from "react-icons/bs"


const HomeSection2 = () => {
	const context = useContext(ContextMain)
	const desktopView = useHooksMediaQuery(`(min-width:768px)`)
	context
	desktopView

	const twClasses = {
		container: `w-full px-16 py-24 flex flex-col space-y-5 items-center justify-center bg-gradient-to-b from-primary-dark-color to-primary-main-color text-primary-main-contrast`,
		
	}

	return (
		<>
			<div
				id="section-2"
				className={twClasses.container}
			>
				<div id="column-group" className="">
						<IconContext.Provider value={{}}>
							<BsBullseye />
						</IconContext.Provider>
						<h2>Custom challenge creation</h2>
						<p>Set the rules, define your own pace</p>
				</div>		
				<div id="column-group" className="">
						<IconContext.Provider value={{}}>
							<BsCalendar2RangeFill />
						</IconContext.Provider>
						<h2>Track the progress</h2>
						<p>See your growth over time with our analytics tools</p>
				</div>		
				<div id="column-group" className="">
						<IconContext.Provider value={{}}>
							<BsFillHddRackFill />
						</IconContext.Provider>
						<h2>Community Support</h2>
						<p>Join our community and get motivated by peers</p>
				</div>		
			</div>
		</>
	)
}

export default HomeSection2
