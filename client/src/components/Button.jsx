import 'styles/styles.css';
import { getButtonStyles} from 'styles/ButtonStyles'

export function Button(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, shadow} 
        = getButtonStyles(props.theme, props.disabled)

    const width = props.width
    const padding = props.padding ? props.padding : 'px-4 sm:px-8'

    return (
      <button class={`${width} max-w-max text-sm sm:text-base font-normal sm:font-medium h-10 sm:h-16 ${bgColor} ${titleColor} ${shadow} ${borderStyle} ${borderColor} ${activeColor} ${hoverColor}
       ${padding} rounded-full disabled:opacity-20 select-none`} {...props}> {props.title} </button>
    );
}