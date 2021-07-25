import { loginUrl, productUrl } from "./Urls";
import { backend } from "./Backend";

export async function login(username, password) {
    const url = loginUrl()
    const body = {
        username: username,
        password: password,
    }
    return await backend.sendData(url, body)
}