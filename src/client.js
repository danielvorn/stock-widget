import axios from "./axios";
import requests from "./requests";

const checkStatus = response => {
    console.log("ENTERED")
    if (response.status === 200) {
        return response
    }

    console.log("response.response")
    console.log(response.response)

    // convert non-2xx HTTP responses into errors
    const error = new Error(response.statusText);
    error.response = response;
    console.log("error")
    console.log(error)
    return Promise.reject(error)
}

export const getStock = stock =>
    axios.get(stock + requests.getStock)
        .then(response => response)