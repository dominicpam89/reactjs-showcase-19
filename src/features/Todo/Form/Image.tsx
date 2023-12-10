import { TypeThemeSelection } from "../../../data/types/context"

interface PropsImage extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
  imageFile:string
  theme: TypeThemeSelection
}

const TodoImage:React.FC<PropsImage> = (props)=>{
  const {theme, imageFile, ...defaultProps} = props
  const urlBase = import.meta.env.VITE_SUPABASE_STORAGE_URL
  const urlImage = urlBase+theme+"/"+imageFile
  const imageName = imageFile.split(".")[0]
  return <img {...defaultProps} src={urlImage} alt={imageName} />
}

export default TodoImage