import '../styles/styles.css';
import { ReactComponent as Placeholder } from '../assets/account.svg';
import { getCardStyles } from '../styles/CardStyles';

export function MessageCard(props) {
    
    const {bgColor, hoverColor, titleColor, messageColor, ringColor, ringBorderColor, borderColor, borderStyle, shadow, iconHexColor} 
        = getCardStyles(props.theme)

    return (
    <div class={`flex-row p-4 sm:p-8 mx-8 my-4 sm:my-8 max-w-xs sm:max-w-full mx-auto rounded-xl shadow-md flex
                 items-center space-x-4 ${bgColor} ${hoverColor} ${borderColor} ${borderStyle} border ${shadow}`}>
        <div class="flex flex-shrink-0">
          <Placeholder class={`border-2 ${ringBorderColor} rounded-full h-8 w-8 sm:w-16 sm:h-16 ring-2 sm:ring-4 
                              ${ringColor}`} fill={iconHexColor} stroke={iconHexColor}/>
        </div>
        <div class="">
          <div class={`text-base sm:text-xl font-medium ${titleColor}`}>{props.title}</div>
          <p class={`text-sm sm:text-base ${messageColor}`}>{props.message}</p>
        </div>
      </div>
    );
}
