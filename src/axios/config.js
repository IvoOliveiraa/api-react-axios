import axios from "axios";

const urlFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    }
})

export default urlFetch