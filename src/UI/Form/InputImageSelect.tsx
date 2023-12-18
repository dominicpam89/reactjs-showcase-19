import { TypeInputImageSelect } from "../../data/types/Props"
import TodoImageList from "../../features/Todo/Form/ImageList"
import UIInputHelperText from "./HelperText"

const UIInputImageSelect:React.FC<TypeInputImageSelect> = ({register={}, onImageSelect, error=undefined, existedImage}) => {
	return (
		<>
			<div>
				<input
					type="text"
					className="hidden"
          {...register}
				/>
				<TodoImageList
          inputError={error}
					onImageSelect={onImageSelect}
					existedImage={existedImage}
				/>
        {error && <div className="h-6"></div>}
        <UIInputHelperText text={error} />
			</div>
		</>
	)
}

export default UIInputImageSelect
