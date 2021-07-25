
let authData = {
    jwt: undefined,
    history: undefined,
}

class Authentication {
    constructor() {
    }

    isAuthenticated() {
        return (authData.jwt)
    }

    setHistory(history) {
        authData.history = history
    }

    login(jwt) {
        authData.jwt = jwt
        if (authData.history) {
            authData.history.replace('/')
            console.log('*' + auth.isAuthenticated())
            // authData.history.go(0)
            
        }
    }

    logout() {
        authData.jwt = undefined
        if (authData.history) {
            authData.history.replace('/')
        }
    }

    getUser() {
        return this.isAuthenticated() ?
            {
                username: authData.jwt.username,
                roles: authData.jwt.roles,            
            } 
        :
            undefined
    }

    getAccessToken() {
        return authData.jwt ? authData.jwt.access_token : undefined
    }
}

const auth = new Authentication()
Object.freeze(auth)
export default auth