import { motion, Variant } from "framer-motion"
import { TypePropsChildren } from "../data/types/common";
import { LoaderSpinner } from "./Loader";

type TypeMotionVar = {
  hidden: Variant
  show: Variant
}

const motionVar:TypeMotionVar = {
  hidden:{
    opacity:1,
    pointerEvents: "all",
  },
  show:{
    opacity:0,
    pointerEvents: "none",
  }
}

const MotionComp:React.FC<TypePropsChildren> = ({children}) => {
  return <>
      <motion.div 
        id="layer" 
        className="z-1000 fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
        variants={motionVar}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <LoaderSpinner />
      </motion.div>
      {children}
    </>
}
 
export default MotionComp;