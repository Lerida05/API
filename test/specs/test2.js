const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');
const testData = require('../pageobjects/testData.js');

describe('Check № 2', () => {
    it('should Send GET request to get post with id=99', async () => {
        const apiClass = new ApiClass();
        const postId = testData.postIdToCheck;

        const response = await apiClass.getPostById(postId);

        console.log('Response', response);

        assert.strictEqual(response.status, 200, 'Expected status code 200');

        const post = response.data;
        assert.strictEqual(post.userId, testData.expectedUserId, 'userId is not equal to expectedUserId');
        assert.strictEqual(post.id, testData.expectedPostId, 'id is not equal to expectedPostId');
        assert.ok(post.title && post.body, 'Title or body is empty');
    });
});
