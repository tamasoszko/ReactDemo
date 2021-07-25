import auth from "auth/Authentication";

class Backend {
    async fetchData(url) {
        let data
        let error
        const headers = withAuthHeader({})
        try {
            let response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: headers,
            })

            if (!verify(response)) {
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
            console.log(exception)
        }
        return { data, error }
    }

    async sendData(url, body, method) {
        let data
        let error
        const httpMethod = method ? method : 'POST'
        const jsonBody = JSON.stringify(body ? body : {})
        const headers = withAuthHeader({
            'Content-Type': 'application/json'
        })
        try {
            let response = await fetch(url, {
                method: httpMethod,
                credentials: 'include',
                mode: 'cors',
                headers: headers,
                body: jsonBody
            })

            if (!verify(response)) {
                error = 'Unauthorized'
            } else if (response.ok) {
                data = await response.json()
            } else {
                error = 'Generic error'
            }
            if (data) {
                console.log(`Send success: '${url}'`)
                // console.log(`${JSON.stringify(data, null, 4)}`)
            } else {
                console.log(`Fetch failed: '${url}', error=${error}`)
            }
        } catch (exception) {
            error = 'Network error'
            console.log(exception)
        }
        return { data, error }
    }
}

function withAuthHeader(headers) {
    const accessToken = auth.getAccessToken()
    return accessToken ?
        headers = {
            ...headers,
            'Authorization': `Bearer ${accessToken}`
        }
        :
        headers
}

function verify(response) {
    switch (response.status) {
        case 401:
        case 403:
            console.log('**Unauthorized')
            return false
        default:
            return true
    }
}

export const backend = new Backend()
