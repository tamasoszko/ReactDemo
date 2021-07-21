import { productListUrl, productUrl } from "./Urls";
import { backend } from "./Backend";


export async function fetchProducts(category) {
    const url = productListUrl(category)
    return await backend.fetchData(url, {
        method: 'GET',
        credentials: 'include'
    })
}

export async function fetchProduct(category, id) {
    const url = productUrl(category, id)
    return await backend.fetchData(url, {
        method: 'GET',
        credentials: 'include'
    })
}