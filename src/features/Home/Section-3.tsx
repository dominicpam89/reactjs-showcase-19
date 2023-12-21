import React, { useContext } from "react"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"
import Section3_Brand from "./Section-3/Brand"
import Section3_BrandDescription from "./Section-3/BrandDescription"
import Section3_SocialLink from "./Section-3/SocialLink"
import { ContextMain } from "../../data/context/main"

type TypeRef = React.LegacyRef<HTMLDivElement> | undefined

const HomeSection3 = React.forwardRef((_,ref:TypeRef) => {
	const {theme} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	const twClasses = {
		container: `
			w-full px-16 py-24 flex flex-col items-center justify-around space-y-6 bg-gradient-to-t opacity-90
			${isThemeInverted?"from-primary-main-color to-primary-light-color":"from-primary-main-color to-primary-dark-color"}
		`,
		card: `flex flex-col space-y-4 items-center`,
		socialContainer: `w-full flex flex-row space-x-4 justify-around`,
	}
	return (
		<>
			<div id="section-3" className={twClasses.container} ref={ref}>
				<div id="card" className={twClasses.card}>
					<Section3_Brand />
					<Section3_BrandDescription />
				</div>
				<div id="card" className={twClasses.card}>
					<div id="social" className={twClasses.socialContainer}>
						<Section3_SocialLink href="#" icon={<BsLinkedin />} />
						<Section3_SocialLink href="#" icon={<BsGithub />} />
						<Section3_SocialLink href="#" icon={<BsInstagram />} />
					</div>
				</div>
			</div>
		</>
	)
})

export default HomeSection3
