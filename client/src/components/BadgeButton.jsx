import '../styles/styles.css';
import { getBadgeButtonStyles} from '../styles/BadgeButtonStyles'

export function BadgeButton(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, _} 
        = getBadgeButtonStyles(props.buttonStyle)

    return (
      <button class={`text-xs max-w-xs min-w-xs ${bgColor} ${titleColor} ${borderStyle} ${borderColor} ${activeColor} ${hoverColor}
       py-1 sm:py-2 px-2 sm:px-4 m-1 rounded-full`}> {props.title} </button>
    );
}