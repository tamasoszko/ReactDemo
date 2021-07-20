
export function getLinkStyles(theme) {
    let textColor = "text-yellow-700"
    let fontSize = "text-base"
    let fontStyle = "not-italic"
    let fontWeight = "font-normal" 
    let margins = ""

    switch (theme) {
        case "subtitle":
            fontSize = "text-sm"
            fontStyle = "italic"
            fontWeight = "font-normal"
            margins = "my-2"
            break;
        case "bold":
            fontWeight = "font-bold"
            break;
        case "subtitle-bold":
            fontSize = "text-sm"
            fontStyle = "italic"
            fontWeight = "font-bold"
            margins = "my-2"
            break;
        default:
            break;
    }
    return [textColor, fontSize, fontStyle, fontWeight, margins].join(' ')
}

export const linkStyles = {
    default: getLinkStyles(''),
    subtitle: getLinkStyles('subtitle'),
    bold: getLinkStyles('bold'),
    subtitleBold: getLinkStyles('subtitle-bold'),
}