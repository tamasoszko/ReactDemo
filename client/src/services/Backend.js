import { auth } from "./Authentication";

class Backend {
    async fetchData(url) {
        let data
        let error
        try {
            let response = await fetch(url, {
                method: 'GET',
                credentials: 'include'
            })

            if (!auth.verify(response)) {
                error = 'Unauthorized'
            } else if (response.ok) {
                data = await response.json()
            } else {
                error = 'Generic error'
            }
            if (data) {
                console.log(`Fetch success: '${url}'`)
                // console.log(`${JSON.stringify(data, null, 4)}`)
            } else {
                console.log(`Fetch failed: '${url}', error=${error}`)
            }
        } catch (exception) {
            error = 'Network error'
        }
        return { data, error }
    }
}

export const backend = new Backend()
