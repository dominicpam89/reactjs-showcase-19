import { redirect } from "react-router-dom"
import HomeBackground from "./Home/Background";
import HomeSection1 from "./Home/Section-1";
import HomeSection2 from "./Home/Section-2";
import HomeSection3 from "./Home/Section-3";

const HomePage = () => {  
  return <>
    <HomeBackground />
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
  </>
}

export default HomePage;

export const loader = async()=>redirect("/welcome")