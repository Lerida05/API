const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');

describe('Check № 4', () => {
    it('should Send POST request to create post with userId=1 and random body and random title (/posts).', async () => {
        const apiClass = new ApiClass();
        const postTitle = 'AlexExample';
        const postBody = 'example_body';
        const userId = 1;

        const postData = {
            title: postTitle,
            body: postBody,
            userId: userId
        };

        const response = await apiClass.axiosInstance.post('/posts', postData);

        console.log('Status Code:', response.status);
        console.log('Response Data:', response.data);

        assert.strictEqual(response.status, 201, 'Expected status code 201');

        assert.deepStrictEqual(
            response.data,
            { ...postData, id: response.data.id },
            'Response body does not match expected data'
        );
    });
});
