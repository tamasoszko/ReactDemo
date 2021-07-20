import '../styles/styles.css';
import { getBadgeButtonStyles} from '../styles/BadgeButtonStyles'

export function BadgeButton(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, _} 
        = getBadgeButtonStyles(props.theme)

    return (
      <button class={`text-xs max-w-xs min-w-xs ${bgColor} ${titleColor} ${borderStyle} ${borderColor} ${activeColor} ${hoverColor}
       h-6 px-2 sm:px-4 m-1 rounded-full disabled:opacity-50 select-none`}> {props.title} </button>
    );
}