import axios from "axios";

const baseURL = 'https://api.trello.com/1';
const KEY = "e329af9483b37135d074e667f5f48020";
const TOKEN = "ATTA7b429b51abd4c5a77e17cc2148635edce084bc45b889d6a7c21bbadaea2709fc28232EFF";

export const api = axios.create({
    baseURL: baseURL,
    params: {
        key: KEY,
        token: TOKEN
    }
})