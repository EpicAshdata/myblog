import axios from "axios";

export function request() {
     axios.create({
        baseURL: 'http://localhost:8443/api',
        timeout: 5000
    })
}