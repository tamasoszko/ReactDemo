
// const backendUrl = 'https://reactdemo.appslab.services'
const backendUrl = 'http://localhost:5000'


export const productListUrl = (category) => {
    return `${backendUrl}/products/${category}`
}

export const productUrl = (category, id) => {
    return `${backendUrl}/products/${category}/${id}`
}

export const categoryListUrl = () => {
    return `${backendUrl}/categories`
}

export const categoryUrl = (category) => {
    return `${backendUrl}/categories/${category}`
}

export const loginUrl = () => {
    return `${backendUrl}/login`
}