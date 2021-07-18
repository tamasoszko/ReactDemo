import '../styles/styles.css';
import { getTextStyles} from '../styles/TextStyles'

export function Text(props) {
    
    const {textColor, fontSize, fontStyle, fontWeight, margins}
        = getTextStyles(props.textStyle)

    return (
      <div class={`${textColor} ${fontSize} ${fontStyle} ${fontWeight} ${margins} ${props.textColor}`}> {props.title} </div>
    );
}