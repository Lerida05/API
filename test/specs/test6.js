const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');
const testData = require('../pageobjects/testData.js');

describe('Check № 6', () => {
    it('should Send GET request to get user with id=5', async () => {
        const apiClass = new ApiClass();
        const userId = testData.userIdToCheck;

        const userResponse = await apiClass.getRequest(`/users/${userId}`);
        
        console.log('User Response', userResponse.data);
        assert.strictEqual(userResponse.status, 200, 'Expected status code 200');

        const userData = userResponse.data;

        assert.strictEqual(userData.id, userId, 'Incorrect user id');
        assert.strictEqual(userData.name, 'Chelsey Dietrich', 'Incorrect name');
        assert.strictEqual(userData.username, 'Kamren', 'Incorrect username');
        assert.strictEqual(userData.email, 'Lucio_Hettinger@annie.ca', 'Incorrect email');
        assert.strictEqual(userData.address.street, 'Skiles Walks', 'Incorrect street');
        assert.strictEqual(userData.address.suite, 'Suite 351', 'Incorrect suite');
        assert.strictEqual(userData.address.city, 'Roscoeview', 'Incorrect city');
        assert.strictEqual(userData.address.zipcode, '33263', 'Incorrect zipcode');
        assert.strictEqual(userData.address.geo.lat, '-31.8129', 'Incorrect latitude');
        assert.strictEqual(userData.address.geo.lng, '62.5342', 'Incorrect longitude');
        assert.strictEqual(userData.phone, '(254)954-1289', 'Incorrect phone');
        assert.strictEqual(userData.website, 'demarco.info', 'Incorrect website');
        assert.strictEqual(userData.company.name, 'Keebler LLC', 'Incorrect company name');
        assert.strictEqual(userData.company.catchPhrase, 'User-centric fault-tolerant solution', 'Incorrect catchPhrase');
        assert.strictEqual(userData.company.bs, 'revolutionize end-to-end systems', 'Incorrect bs');
    });
});
