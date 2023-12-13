import { motion, HTMLMotionProps } from "framer-motion"

interface TestButtonIconProps extends HTMLMotionProps<"button"> {
	text: string
}
const TestButtonIcon: React.FC<TestButtonIconProps> = ({ text, ...defaultProps }) => {
	return <motion.button {...defaultProps}>{text}</motion.button>
}

interface TestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
}
const TestButton: React.FC<TestButtonProps> = ({text,...defaultProps})=>{
  return <button {...defaultProps}>{text}</button>
}

const TestApp = () => {
	return (
		<>
			<TestButtonIcon
				text="Test Button Icon"
				onClick={() => console.log("TestIcon is clicked")}
				whileHover={{ opacity: 0.8 }}
			/>
      <TestButton 
        text="test button"
        onClick={()=>console.log("Test Button clicked")}
      />
		</>
	)
}

export default TestApp
