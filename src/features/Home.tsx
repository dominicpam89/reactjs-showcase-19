import { redirect } from "react-router-dom"
import HomeSection1 from "./Home/Section-1";

const HomePage = () => {
  return <>
    <HomeSection1 />
  </>
}

export default HomePage;

export const loader = async()=>redirect("/welcome")