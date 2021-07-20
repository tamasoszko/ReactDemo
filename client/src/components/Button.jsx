import '../styles/styles.css';
import { getButtonStyles} from '../styles/ButtonStyles'

export function Button(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, shadow} 
        = getButtonStyles(props.theme)

    return (
      <button class={`max-w-xs min-w-xs h-12 ${bgColor} ${titleColor} ${shadow} ${borderStyle} ${borderColor} ${activeColor} ${hoverColor}
       px-4 sm:px-8 m-2 rounded-full disabled:opacity-50 select-none`}> {props.title} </button>
    );
}