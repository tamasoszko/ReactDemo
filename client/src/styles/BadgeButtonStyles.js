
export function getBadgeButtonStyles(buttonStyle) {
    let bgColor = "bg-yellow-600";
    let hoverColor = "hover:text-yellow-100 hover:bg-yellow-700"
    let activeColor = "active:bg-yellow-800"
    let titleColor = "text-white";
    let borderColor = "border-transparent";
    let borderStyle = "border-none";
    let shadow = "shadow";
    
    switch (buttonStyle) {
        case "blue":
            bgColor = "bg-gray-700"
            hoverColor = "hover:bg-gray-900"
            activeColor = "active:bg-gray-500"
            titleColor = "text-gray-100"
            break;
        case "gray":
            bgColor = "bg-gray-100"
            hoverColor = "hover:bg-gray-200 hover:text-gray-800"
            activeColor = "active:bg-gray-300"
            titleColor = "text-gray-700"
            break;
        case "red":
            bgColor = "bg-red-700"
            hoverColor = "hover:bg-red-800 hover:text-red-100"
            activeColor = "active:bg-red-600"
            titleColor = "text-red-50"
            break;
    }
    return {bgColor, hoverColor, activeColor, titleColor, borderColor, borderStyle, shadow};
}