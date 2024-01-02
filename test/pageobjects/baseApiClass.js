const axios = require('axios');
const apiConfig = require('../pageobjects/apiConfig.js');

class BaseApiClass {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: apiConfig.baseURL,
        });
    }

    async getRequest(url) {
        console.log(`Sending GET request to: ${url}`);

        try {
            const response = await this.axiosInstance.get(url);
            console.log(`Response for GET request to ${url}:`, response.data);

            return response;
        } catch (error) {
            console.error(`Error for GET request to ${url}:`, error.response ? error.response.data : error.message);

            throw error;
        }
    }

    async postRequest(url, data) {
        console.log(`Sending POST request to: ${url}`);

        try {
            const response = await this.axiosInstance.post(url, data);
            console.log(`Response for POST request to ${url}:`, response.data);

            return response;
        } catch (error) {
            console.error(`Error for POST request to ${url}:`, error.response ? error.response.data : error.message);

            throw error;
        }
    }
}

module.exports = BaseApiClass;
