import axios from "./axios"
import requests from "./requests"

export const getQuote = stock =>
    axios.get(stock + requests.getQuote)
        .then(response => response)