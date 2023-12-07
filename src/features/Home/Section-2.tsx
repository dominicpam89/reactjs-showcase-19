import { useContext } from "react"
import { useHooksMediaQuery } from "../../data/hooks/media-query"
import { ContextMain } from "../../data/context/main"

const HomeSection2 = () => {
	const context = useContext(ContextMain)
	const desktopView = useHooksMediaQuery(`(min-width:768px)`)
	context
	desktopView

	const twClasses = {
		container: `w-full px-12 py-24 flex flex-row space-x-5 items-center justify-center bg-gradient-to-b from-primary-dark-color to-primary-main-color text-primary-main-contrast`,
		
	}

	return (
		<>
			<div
				id="section-2"
				className={twClasses.container}
			>
				<div>
						
				</div>		
			</div>
		</>
	)
}

export default HomeSection2
