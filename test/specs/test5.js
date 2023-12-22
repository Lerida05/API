const assert = require('assert');
const ApiClass = require('../pageobjects/apiClass.js');

describe('Check № 5', () => {
    it('should Send GET request to get users', async () => {
        const apiClass = new ApiClass();
        const response = await apiClass.getAllUsers();

        assert.strictEqual(response.status, 200, 'Expected status code 200');

        const users = JSON.parse(JSON.stringify(response.data));

        const userWithId5 = users.find(user => user.id === 5);
        assert.ok(userWithId5, 'User with id=5 not found');

        assert.strictEqual(userWithId5.name, 'Chelsey Dietrich', 'Incorrect name');
        assert.strictEqual(userWithId5.username, 'Kamren', 'Incorrect username');
        assert.strictEqual(userWithId5.email, 'Lucio_Hettinger@annie.ca', 'Incorrect email');

        assert.strictEqual(userWithId5.address.street, 'Skiles Walks', 'Incorrect street');
        assert.strictEqual(userWithId5.address.suite, 'Suite 351', 'Incorrect suite');
        assert.strictEqual(userWithId5.address.city, 'Roscoeview', 'Incorrect city');
        assert.strictEqual(userWithId5.address.zipcode, '33263', 'Incorrect zipcode');

        const geo = userWithId5.address.geo;
        assert.strictEqual(geo.lat, '-31.8129', 'Incorrect latitude');
        assert.strictEqual(geo.lng, '62.5342', 'Incorrect longitude');

        assert.strictEqual(userWithId5.phone, '(254)954-1289', 'Incorrect phone');
        assert.strictEqual(userWithId5.website, 'demarco.info', 'Incorrect website');
        assert.strictEqual(userWithId5.company.name, 'Keebler LLC', 'Incorrect company name');
        assert.strictEqual(userWithId5.company.catchPhrase, 'User-centric fault-tolerant solution', 'Incorrect catchPhrase');
        assert.strictEqual(userWithId5.company.bs, 'revolutionize end-to-end systems', 'Incorrect bs');
    });
});
