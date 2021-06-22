import axios from "./axios"
import requests from "./requests"

export const getStock = stock =>
    axios.get(stock + requests.getQuote)
        .then(response => response)