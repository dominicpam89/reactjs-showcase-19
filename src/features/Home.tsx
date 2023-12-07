import { redirect } from "react-router-dom"
import HomeSection1 from "./Home/Section-1";
import HomeSection2 from "./Home/Section-2";

const HomePage = () => {
  return <>
    <HomeSection1 />
    <HomeSection2 />
  </>
}

export default HomePage;

export const loader = async()=>redirect("/welcome")