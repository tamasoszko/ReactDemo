

export const auth = {
     verify(response) {
        switch (response.status) {
            case 401:
            case 403:
                console.log('**Unauthorized')
                return false
            default:
                return true
        }
    }
}