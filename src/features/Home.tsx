import { redirect } from "react-router-dom"

const HomePage = () => {
  return <>
    <h1>Welcome to {import.meta.env.VITE_APP_NAME}</h1>
  </>
}

export default HomePage;

export const loader = async()=>redirect("/welcome")