import axios from "axios";

const instance = axios.create({
    baseURL: 'https://node-js-smtp-server.vercel.app',
    timeout: 8000
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