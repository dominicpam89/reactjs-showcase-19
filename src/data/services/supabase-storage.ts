import { supabase } from "./supabase";

export const getImagesThemeDefault = async()=>{
  const {data:images, error} = await supabase.storage.from("activity").list("theme-default/")
  if(error) throw new Error("Couldn't access theme default storage")
  return images
}

export const getImagesThemeRelax = async()=>{
  const {data:images, error} = await supabase.storage.from("activity").list("theme-relax/")
  if(error) throw new Error("Couldn't access theme relax storage")
  return images
}

export const getImagesThemeEarth = async()=>{
  const {data:images, error} = await supabase.storage.from("activity").list("theme-earth/")
  if(error) throw new Error("Couldn't access theme earth storage")
  return images
}

export type TypeImageSize = "sm"|"xs"|"lg"
export const getActivityImages = async(size:TypeImageSize="sm")=>{
  const {data, error} = await supabase.storage.from("activity").list("")
  if(error) throw new Error("Couldn't access image files in storage")
  let images = data?.filter(image=>image.name.includes(size))
  if(size==="lg") images = data.filter(image=>!image.name.includes("sm") && !image.name.includes("xs") && image.name.includes(".png"))
  return images
}