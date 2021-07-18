import '../styles/styles.css';
import { getInputStyles} from '../styles/InputStyles'
import { Text } from './Text';

export function Input(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, subtitleColor, textColor, borderColor, borderWidth, focusRingColor, focusTitleColor, shadow, placeholderOpacity, placeholderColor} 
        = getInputStyles(props.inputStyle)
    return (
      <div class="flex flex-col"> 
        <div class={`mx-2 -mb-2`}>
            <Text title={props.title} textStyle='default'/>
        </div>
        <input placeholder={props.placeholder} defaultValue={props.value} class={`max-w-5xl
        py-2 sm:py-4 px-4 sm:px-8 m-2 rounded-lg 
        ${bgColor} ${hoverColor} ${activeColor} ${textColor} ${borderColor} ${borderWidth} ${focusRingColor} ${focusTitleColor} ${shadow} ${placeholderOpacity} ${placeholderColor}
        focus:outline-none focus:ring-2 focus:border-transparent`} />
        <div class={`mx-2 -mt-4`}>
            <Text title={props.subtitle} textStyle='subtitle' textColor={subtitleColor}/>
        </div>
    </div>
    );
}