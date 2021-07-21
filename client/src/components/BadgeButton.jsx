import 'styles/styles.css';
import { getBadgeButtonStyles} from 'styles/BadgeButtonStyles'

export function BadgeButton(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, _} 
        = getBadgeButtonStyles(props.theme)

    const sizes = getSizes(props.size)

    return (
      <button class={`${sizes} ${bgColor} ${titleColor} ${borderStyle} ${borderColor} ${activeColor} ${hoverColor}
        rounded-full disabled:opacity-50 select-none`}> {props.title} </button>
    );
}

function getSizes(size) {

    let text = 'text-xs'
    let dimensions = 'max-w-xs min-w-xs h-6 sm:h-8'
    let marginsPaddings = 'px-2 sm:px-4 m-1'

    switch (size) {
        case 'large':
            text = 'text-base font-medium'
            dimensions = 'max-w-xs min-w-xs h-10 sm:h-14'
            marginsPaddings = 'px-4 sm:px-6 m-1'
            break;
        case 'xlarge':
            text = 'text-xl font-semibold'
            dimensions = 'max-w-xs min-w-xs h-12 sm:h-16'
            marginsPaddings = 'px-6 sm:px-8 m-1'
            break;
        default:
            break;
    }
    return [text, dimensions, marginsPaddings].join(' ')
}