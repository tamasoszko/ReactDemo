import 'styles/styles.css';
import { getTextStyles} from 'styles/TextStyles'

export function Text(props) {
    
    const {styleTextColor, fontSize, fontStyle, fontWeight, margins}
        = getTextStyles(props.theme)

    const textColor = props.textColor ? props.textColor : styleTextColor

    return (
      <div class={`${textColor} ${fontSize} ${fontStyle} ${fontWeight} ${margins} ${props.textColor}`}> {props.title} </div>
    );
}