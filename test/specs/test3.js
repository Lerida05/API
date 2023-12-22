const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');
const testData = require('../pageobjects/testData.js');

describe('Check № 3', () => {
    it('should Send GET request to get post with id=150', async () => {
        const apiClass = new ApiClass();
        const postId = testData.postIdToCheckFor404;

        try {
            const response = await apiClass.getRequest(`/posts/${postId}`);
            console.log('Response:', response);
            assert.strictEqual(response.status, 404, 'Expected status code 404');

            assert.strictEqual(response.data.userId, testData.expectedUserId, 'Unexpected userId');
        } catch (error) {
            console.log('Error:', error.response);

            assert.strictEqual(error.response.status, 404, 'Expected status code 404');
            assert.deepEqual(error.response.data, {}, 'Expected empty response body for a 404 error');
        }
    });
});
