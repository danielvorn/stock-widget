import axios from "./axios";
import requests from "./requests";

const checkStatus = response => {
    if (response.status === 200) {
        return response
    }
    // convert non-2xx HTTP responses into errors
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error)
}

export const getStock = stock =>
    axios.get(stock + requests.getStock)
        .then(checkStatus)