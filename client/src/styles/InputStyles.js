
export function getInputStyles(theme) {
    let bgColor = "bg-gray-50";
    let hoverColor = "hover:white"
    let activeColor = "active:white"
    let textColor = "text-gray-600"
    let borderColor = "border-gray-600"
    let borderWidth = "border"
    let shadow = "shadow-none"
    let placeholderColor = "placeholder-gray-600"
    let placeholderOpacity = "placeholder-opacity-40"
    let focusRingColor = "focus:ring-gray-800"
    let focusTitleColor = "focus:text-gray-800"
    let titleColor = "text-gray-600"
    let subtitleColor = "text-gray-400"
    
    switch (theme) {
        case "success":
            bgColor = "bg-green-50"
            textColor = "text-green-600"
            borderColor = "border-green-600"
            focusRingColor = "focus:ring-green-600"
            focusTitleColor = "focus:text-green-600"
            placeholderColor = "placeholder-green-600"
            subtitleColor = "text-green-600"
            break;
        case "fail":
            bgColor = "bg-red-50"
            textColor = "text-red-800"
            borderColor = "border-red-800"
            focusRingColor = "focus:ring-red-900"
            focusTitleColor = "focus:text-red-900"
            placeholderColor = "placeholder-red-800"
            subtitleColor = "text-red-800"
            break;
        default:
            break;
    }
    return {bgColor, hoverColor, activeColor, titleColor, subtitleColor, textColor, borderColor, borderWidth, focusRingColor, focusTitleColor, shadow, placeholderOpacity, placeholderColor};
}