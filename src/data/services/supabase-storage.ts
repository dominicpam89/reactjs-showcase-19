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

export const getActivityImages = async()=>{
  const {data:images, error} = await supabase.storage.from("activity").list()
  if(error) throw new Error("Couldn't access image files in storage")
  return images.filter(image=>image.name.includes("png"))
}