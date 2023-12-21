export default function Section3_Brand(){
	const logoSrc = "/logo/logo-white-sm.png"
	const twClasses = {
		container: `flex flex-row space-x-5 items-center justify-center`,
		logo: `h-14 w-auto opacity-80`,
		title: `text-3xl font-extrabold text-primary-main-contrast [text-shadow:_2px_2px_5px_rgba(var(--color-primary-main-contrast),30%)] opacity-80`,
	}

	return (
		<>
			<div id="brand" className={twClasses.container}>
				<img src={logoSrc} className={twClasses.logo} />
				<span className={twClasses.title}>Fancydo</span>
			</div>
		</>
	)
}