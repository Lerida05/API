const axios = require('axios');
const assert = require('assert');

describe('Check № 1', () => {
    it('should Send GET Request to get all posts (/posts).', async () => {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
       console.log('Status Code:', response.statusCode);
        assert.strictEqual(response.status, 200, 'Expected status code 200');

        try {
            JSON.parse(JSON.stringify(response.data));
        } catch (error) {
            assert.fail('The list in the response body is not valid JSON');
        }

        const posts = response.data;
        const sortedPosts = [...posts];
        sortedPosts.sort((a, b) => a.id - b.id);

        assert.deepStrictEqual(posts, sortedPosts, 'Posts are not sorted in ascending order by id');

    });
});
