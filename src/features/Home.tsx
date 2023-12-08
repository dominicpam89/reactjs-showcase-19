import { useRef } from "react"
import { redirect } from "react-router-dom"
import HomeBackground from "./Home/Background";
import HomeSection1 from "./Home/Section-1";
import HomeSection2 from "./Home/Section-2";
import HomeSection3 from "./Home/Section-3";

const HomePage = () => {
  const section3_container = useRef<HTMLDivElement|null>(null)
  const onAboutClick = ()=>section3_container.current?.scrollIntoView({behavior:"smooth"})
  return <>
    <HomeBackground />
    <HomeSection1 onAboutClick={onAboutClick} />
    <HomeSection2 />
    <HomeSection3 ref={section3_container} />
  </>
}

export default HomePage;

export const loader = async()=>redirect("/welcome")