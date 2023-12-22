const axios = require('axios');
const apiConfig = require('./apiConfig.js');

class ApiClass {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: apiConfig.baseURL,
        });
    }

    async getRequest(url) {
        try {
            const response = await this.axiosInstance.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async postRequest(url, data) {
        try {
            const response = await this.axiosInstance.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getPostById(postId) {
        const url = `/posts/${postId}`;
        return this.getRequest(url);
    }

    async getAllUsers() {
        const url = '/users';
        return this.getRequest(url);
    }

    async createPost(postData) {
        const url = '/posts';
        return this.postRequest(url, postData);
    }
}

module.exports = ApiClass;
