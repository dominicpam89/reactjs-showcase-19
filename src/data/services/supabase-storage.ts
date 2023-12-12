import { activityDb } from "./supabase";

export type TypeImageSize = "sm"|"xs"|"lg"
export const getActivityImages = async(size:TypeImageSize="sm")=>{
  const {data, error} = await activityDb.from("activity").list("")
  if(error) throw new Error("Couldn't access image files in storage")
  let images = data?.filter(image=>image.name.includes(size))
  if(size==="lg") images = data.filter(image=>!image.name.includes("sm") && !image.name.includes("xs") && image.name.includes(".png"))
  return images
}