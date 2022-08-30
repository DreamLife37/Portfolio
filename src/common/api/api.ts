import axios from "axios";

const instance = axios.create({
    baseURL: 'https://gmail-server-devandrey.herokuapp.com/',
    timeout: 5000
});

type valuesFormikType = {
    name: string,
    email: string,
    message: string
}

export const API = {
    sendMessage: (valuesFormik: valuesFormikType) => {
        return instance.post('/sendMessage', valuesFormik)
    }
}