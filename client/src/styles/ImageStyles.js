
    function getImageStyles(style) {
        let margins = "my-4"
        let paddings = ""
        let width = ""
        let border = ''

        switch (style) {
        case "small":
            paddings = ""
            width = "w-24"
            break;
        case "medium":
            paddings = ""
            width = "w-48"
            break;
        case "large":
            paddings = ""
            width = "w-96"
            break;
        default:
            break;
    }
    return [margins, paddings, width, border].join(' ')
}

export const imageStyles = {
    default: getImageStyles(''),
    rounded: getImageStyles('rounded'),
    circle: getImageStyles('circle'),
}