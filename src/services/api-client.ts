import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fb49147f993047dcb7c6fbd056c8f877'
    }
})