import { LoaderSpinner } from "./Loader"
import { motion } from "framer-motion"

const UILoadingPage = () => {
	return (
			<motion.div
				id="container"
				className="w-full min-h-screen flex flex-col space-y-4 justify-center items-center p-12 bg-gradient-to-b from-primary-main-color to-info-main-color"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
			>
				<p className="text-sm text-primary-main-contrast">
					Loading Page...
				</p>
				<LoaderSpinner scene="dark" width="sm" />
			</motion.div>
	)
}

export default UILoadingPage
