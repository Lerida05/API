const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');
const testData = require('../pageobjects/testData.js');

describe('Check № 2', () => {
    it('should Send GET request to get post with specified postId (/posts/{postId}).', async () => {
        const apiClass = new ApiClass();
        const postId = testData.postIdToCheck;

        const response = await apiClass.getRequest(`/posts/${postId}`);

        console.log('Response', response);

        assert.strictEqual(response.status, 200, 'Expected status code 200');

        const post = response.data;
        assert.strictEqual(post.userId, testData.userIdToCheck, `userId is not equal to ${testData.userIdToCheck}`);
        assert.strictEqual(post.id, postId, `id is not equal to ${postId}`);
        assert.ok(post.title && post.body, 'Title or body is empty');
    });
});
