
export function getCardStyles(cardStyle) {
    let bgColor = "bg-gray-100";
    let hoverColor = "hover:bg-gray-200"
    let titleColor = "text-gray-900";
    let messageColor = "text-gray-600";
    let ringColor = "ring-gray-900";
    let ringBorderColor = "border-gray-100";
    let borderColor = "border-transparent";
    let borderStyle = "border-none";
    let shadow = "shadow";
    let iconHexColor = "#111827"
    
    switch (cardStyle) {
        case "darkgray":
            bgColor = "bg-gray-700"
            hoverColor = "hover:bg-gray-700"
            titleColor = "text-gray-100"
            messageColor = "text-gray-300"
            ringColor = "ring-gray-300"
            ringBorderColor = "border-gray-700"
            iconHexColor = "#D1D5DB"
            break;
        case "yellow":
            bgColor = "bg-yellow-600"
            hoverColor = "hover:bg-yellow-500"
            titleColor = "text-yellow-50"
            messageColor = "text-yellow-100"
            ringColor = "ring-yellow-50"
            ringBorderColor = "border-yellow-600"
            iconHexColor = "#FFFBEB"
            break;

        case "white":
            bgColor = "bg-white"
            hoverColor = "hover:bg-gray-100"
            titleColor = "text-gray-500"
            messageColor = "text-gray-300"
            ringColor = "ring-gray-500"
            borderColor = "border-gray-500"
            borderStyle = "border-dashed"
            shadow = "shadow-none"
            ringBorderColor = "border-white"
            iconHexColor = "#6B7280"
            break;
        default:
            break;
    }
    return {bgColor, titleColor, messageColor, ringColor, ringBorderColor, borderColor, borderStyle, shadow, iconHexColor};
}