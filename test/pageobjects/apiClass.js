const axios = require('axios');
const apiConfig = require('../pageobjects/apiConfig.js');
const BaseApiClass = require('../pageobjects/baseApiClass.js');

class ApiClass extends BaseApiClass {
    constructor() {
        super();
        this.axiosInstance = axios.create({
            baseURL: apiConfig.baseURL
        });
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
