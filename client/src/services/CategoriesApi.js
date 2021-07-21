import { categoryListUrl, categoryUrl } from "./Urls";
import { backend } from "./Backend";


export async function fetchCategories() {
    const url = categoryListUrl()
    return await backend.fetchData(url, {
        method: 'GET',
        credentials: 'include'
    })
}

export async function fetchCategory(category) {
    const url = categoryUrl(category)
    return await backend.fetchData(url, {
        method: 'GET',
        credentials: 'include'
    })
}
