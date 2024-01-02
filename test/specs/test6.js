const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');
const testData = require('../pageobjects/testData.js');
const { userResponse, userWithId5 } = require('../specs/test5.js');

describe('Check № 6', () => {
    it('should Send GET request to get user with id=5', async () => {
        const apiClass = new ApiClass();
        const userId = testData.userIdToCheck;

        const userResponseFromTest6 = await apiClass.getRequest(`/users/${userId}`);

        console.log('User Response from Test 6:', userResponseFromTest6.data);
        console.log('Expected User Data from Test 5:', userWithId5);

        assert.strictEqual(userResponseFromTest6.status, 200, 'Expected status code 200');

        const userData = userResponseFromTest6.data;

        // Compare the entire objects with deep equality
        assert.deepStrictEqual(userData, userWithId5, 'User data does not match the expected data');
    });
});
