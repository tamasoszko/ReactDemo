import '../styles/styles.css';
import { getTextStyles} from '../styles/TextStyles'

export function Text(props) {
    
    const {styleTextColor, fontSize, fontStyle, fontWeight, margins}
        = getTextStyles(props.textStyle)

    let textColor = styleTextColor
    if (props.textColor) {
      textColor = props.textColor
    }
    return (
      <div class={`${textColor} ${fontSize} ${fontStyle} ${fontWeight} ${margins} ${props.textColor}`}> {props.title} </div>
    );
}