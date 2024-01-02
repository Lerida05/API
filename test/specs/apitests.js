const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');
const testData = require('../pageobjects/testData.js');
const { userResponse, userWithId5 } = require('../specs/test5.js');

describe('API Tests', () => {
    const apiClass = new ApiClass();

    // Check № 1: Send GET Request to get all posts
    it('should Send GET Request to get all posts', async () => {
        const response = await apiClass.getAllPosts();
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

    // Check № 2: Send GET request to get post with id=99
    it('should Send GET request to get post with id=99', async () => {
        const postId = testData.postIdToCheck;

        const response = await apiClass.getPostById(postId);

        console.log('Response', response);

        assert.strictEqual(response.status, 200, 'Expected status code 200');

        const post = response.data;
        assert.strictEqual(post.userId, testData.expectedUserId, 'userId is not equal to expectedUserId');
        assert.strictEqual(post.id, testData.expectedPostId, 'id is not equal to expectedPostId');
        assert.ok(post.title && post.body, 'Title or body is empty');
    });

    // Check № 3: Send GET request to get post with id=150
    it('should Send GET request to get post with id=150', async () => {
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

    // Check № 4: Send POST request to create post with needed data
    it('should Send POST request to create post with needed data', async () => {
        const postTitle = 'AlexExample';
        const postBody = 'example_body';
        const userId = 1;

        const postData = {
            title: postTitle,
            body: postBody,
            userId: userId
        };

        const response = await apiClass.createPost(postData);

        console.log('Status Code:', response.status);
        console.log('Response Data:', response.data);

        assert.strictEqual(response.status, 201, 'Expected status code 201');

        assert.deepStrictEqual(
            response.data,
            { ...postData, id: response.data.id },
            'Response body does not match expected data'
        );
    });

    // Check № 5: Send GET request to get users
    it('should Send GET request to get users', async () => {
        const response = await apiClass.getAllUsers();

        assert.strictEqual(response.status, 200, 'Expected status code 200');

        userResponse = response;

        const users = JSON.parse(JSON.stringify(response.data));

        userWithId5 = users.find(user => user.id === 5);
        assert.ok(userWithId5, 'User with id=5 not found');

        assert.strictEqual(userWithId5.name, 'Chelsey Dietrich', 'Incorrect name');
        assert.strictEqual(userWithId5.username, 'Kamren', 'Incorrect username');
        assert.strictEqual(userWithId5.email, 'Lucio_Hettinger@annie.ca', 'Incorrect email');
        assert.strictEqual(userWithId5.address.street, 'Skiles Walks', 'Incorrect street');
        assert.strictEqual(userWithId5.address.suite, 'Suite 351', 'Incorrect suite');
        assert.strictEqual(userWithId5.address.city, 'Roscoeview', 'Incorrect city');
        assert.strictEqual(userWithId5.address.zipcode, '33263', 'Incorrect zipcode');
        assert.strictEqual(userWithId5.address.geo.lat, '-31.8129', 'Incorrect latitude');
        assert.strictEqual(userWithId5.address.geo.lng, '62.5342', 'Incorrect longitude');
        assert.strictEqual(userWithId5.phone, '(254)954-1289', 'Incorrect phone');
        assert.strictEqual(userWithId5.website, 'demarco.info', 'Incorrect website');
        assert.strictEqual(userWithId5.company.name, 'Keebler LLC', 'Incorrect company name');
        assert.strictEqual(userWithId5.company.catchPhrase, 'User-centric fault-tolerant solution', 'Incorrect catchPhrase');
        assert.strictEqual(userWithId5.company.bs, 'revolutionize end-to-end systems', 'Incorrect bs');
    });
});

module.exports = {
    userResponse,
    userWithId5,
};

// Check № 6: Send GET request to get user with id=5
it('should Send GET request to get user with id=5', async () => {
    const apiClass = new ApiClass();
    const userId = testData.userIdToCheck;

    const userResponseFromTest6 = await apiClass.getRequest(`/users/${userId}`);

    console.log('User Response from Test 6:', userResponseFromTest6.data);
    console.log('Expected User Data from Test 5:', userWithId5);

    assert.strictEqual(userResponseFromTest6.status, 200, 'Expected status code 200');

    const userData = userResponseFromTest6.data;

    assert.deepStrictEqual(userData, userWithId5, 'User data does not match the expected data');
}); 