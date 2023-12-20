const axios = require('axios');

class BaseClass {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    }

    async getRequest(url) {
        return await this.axiosInstance.get(url);
    }

}

module.exports = BaseClass;
