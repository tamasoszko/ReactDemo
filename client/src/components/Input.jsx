import 'styles/styles.css';
import { getInputStyles} from 'styles/InputStyles'
import { Text } from './Text';

export function Input(props) {
    
    const {bgColor, hoverColor, activeColor, titleColor, subtitleColor, textColor, borderColor, borderWidth, focusRingColor, focusTitleColor, shadow, placeholderOpacity, placeholderColor} 
        = getInputStyles(props.theme)

    const width = props.width

    return (
      <div class={`flex flex-col items-center`}> 
        <div class={`-mb-2`}>
            <Text title={props.title} theme='default'/>
        </div>
        <input placeholder={props.placeholder} defaultValue={props.value} 
            class={`text-sm sm:text-base py-2 sm:py-4 px-4 sm:px-8 rounded-lg lg:rounded-xl
            ${width} ${bgColor} ${hoverColor} ${activeColor} ${textColor} ${borderColor} ${borderWidth} ${focusRingColor} ${focusTitleColor} ${shadow} ${placeholderOpacity} ${placeholderColor}
            focus:outline-none focus:ring-2 focus:border-transparent`} {...props} />        
        <div class={`mt-2`}>
            <Text title={props.subtitle} theme='subtitle' textColor={subtitleColor}/>
        </div>
    </div>
    );
}