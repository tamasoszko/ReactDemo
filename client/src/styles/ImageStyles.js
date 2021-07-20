
    function getImageStyles(theme) {
        let margins = "m-0"
        let paddings = ""
        let width = ""
        let border = ''
        let shadow = 'filter drop-shadow-lg'

        switch (theme) {
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
    return [margins, paddings, width, border, shadow].join(' ')
}

export const imageStyles = {
    default: getImageStyles(''),
    rounded: getImageStyles('rounded'),
    circle: getImageStyles('circle'),
}