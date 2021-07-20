
export function getTextStyles(theme) {
    let textColor = "text-gray-800"
    let fontSize = "text-base"
    let fontStyle = "not-italic"
    let fontWeight = "font-normal" 
    let margins = ""

    switch (theme) {
        case "h1":
            fontSize = "text-3xl"
            fontWeight = "font-bold"
            margins = "my-8"
            break;
        case "h2":
            fontSize = "text-2xl"
            fontWeight = "font-bold"
            margins = "my-8"
            break;
        case "title":
            fontSize = "text-xl"
            fontWeight = "font-medium"
            margins = "my-4"
            break;
        case "subtitle":
            textColor = "text-gray-600"
            fontSize = "text-sm"
            fontStyle = "italic"
            fontWeight = "font-light"
            margins = "my-2"
            break;
        default:
            break;
    }
    return {textColor, fontSize, fontStyle, fontWeight, margins};
}