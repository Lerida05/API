const axios = require('axios');
const assert = require('assert');

describe('Check № 3', () => {
    it('should Send GET request to get post with id=150 (/posts/150).', async () => {
        const postId = 150;
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            console.log('Response:', response);
            assert.strictEqual(response.status, 404, 'Expected status code 404');
        } catch (error) {
            console.log('Error:', error.response);

            assert.strictEqual(error.response.status, 404, 'Expected status code 404');
            assert.deepEqual(error.response.data, {}, 'Expected empty response body for a 404 error');
        }
    });
});
