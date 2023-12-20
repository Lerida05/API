
const axios = require('axios');
const assert = require('assert');

describe('Check № 2', () => {
    it('should Send GET request to get post with id=99 (/posts/99).', async () => {
        
        const postId = 99;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        console.log('Response', response);
       
        assert.strictEqual(response.status, 200, 'Expected status code 200');

        const post = response.data;
        assert.strictEqual(post.userId, 10, 'userId is not equal to 10');
        assert.strictEqual(post.id, 99, 'id is not equal to 99');
        assert.ok(post.title && post.body, 'Title or body is empty');

    });
});
