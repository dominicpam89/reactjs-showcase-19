import { TypeThemeSelection } from "../../../data/types/context"

interface PropsImage extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
  imageFile:string
  theme: TypeThemeSelection
}

const TodoImage:React.FC<PropsImage> = ({imageFile, theme})=>{
  const urlBase = import.meta.env.VITE_SUPABASE_STORAGE_URL
  const urlImage = urlBase+theme+"/"+imageFile
  const imageName = imageFile.split(".")[0]
  return <img src={urlImage} alt={imageName} className="w-10" />
}

export default TodoImage