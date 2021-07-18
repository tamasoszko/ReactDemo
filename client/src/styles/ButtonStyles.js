
export function getButtonStyles(buttonStyle) {
    let bgColor = "bg-white";
    let hoverColor = "hover:bg-gray-50"
    let activeColor = "active:bg-red-400"
    let titleColor = "text-yellow-600";
    let borderColor = "border-transparent";
    let borderStyle = "border-none";
    let shadow = "shadow";
    
    switch (buttonStyle) {
        case "primary":
            bgColor = "bg-gray-700"
            hoverColor = "hover:bg-gray-900"
            activeColor = "active:bg-gray-500"
            titleColor = "text-gray-100"
            break;
        case "secondary":
            bgColor = "bg-gray-100"
            hoverColor = "hover:bg-gray-200"
            activeColor = "active:bg-gray-400"
            titleColor = "text-gray-700"
            break;
        case "bagde-secondary":
            bgColor = "bg-gray-100"
            hoverColor = "hover:bg-gray-200"
            activeColor = "active:bg-gray-400"
            titleColor = "text-gray-700"
            break;
    }
    return {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, shadow};
}