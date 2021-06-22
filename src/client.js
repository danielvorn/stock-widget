import axios from "./axios"
import requests from "./requests"

export const getStock = stock =>
    axios.get(stock + requests.getStock)
        .then(response => response)