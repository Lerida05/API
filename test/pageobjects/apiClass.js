// ApiTest.js
const BaseClass = require ('../pageobjects/baseClass.js');

class ApiClass extends BaseClass {
    async getAllPosts() {
        const url = '/posts';
        return await this.getRequest(url);
    }
    // Add more API-specific methods if needed
}

module.exports = ApiClass;
