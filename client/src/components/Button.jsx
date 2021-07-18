import '../styles/styles.css';
import { getButtonStyles} from '../styles/ButtonStyles'

export function Button(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, shadow} 
        = getButtonStyles(props.buttonStyle)

    return (
      <button class={`max-w-xs min-w-xs ${bgColor} ${titleColor} ${shadow} ${borderStyle} ${borderColor} ${activeColor} ${hoverColor}
       py-2 sm:py-4 px-4 sm:px-8 m-2 rounded-full`}> {props.title} </button>
    );
}