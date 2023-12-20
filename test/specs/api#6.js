const axios = require('axios');
const assert = require('assert');

describe('Check № 6', () => {
    it('should Send GET request to get user with id=5 (/users/5).', async () => {
        const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users/5');
        console.log('User Response', userResponse.data); 
        assert.strictEqual(userResponse.status, 200, 'Expected status code 200');

        assert.strictEqual(userResponse.data.id, 5, 'Incorrect user id');
        assert.strictEqual(userResponse.data.name, 'Chelsey Dietrich', 'Incorrect name');
        assert.strictEqual(userResponse.data.username, 'Kamren', 'Incorrect username');
        assert.strictEqual(userResponse.data.email, 'Lucio_Hettinger@annie.ca', 'Incorrect email');
        assert.strictEqual(userResponse.data.address.street, 'Skiles Walks', 'Incorrect street');
        assert.strictEqual(userResponse.data.address.suite, 'Suite 351', 'Incorrect suite');
        assert.strictEqual(userResponse.data.address.city, 'Roscoeview', 'Incorrect city');
        assert.strictEqual(userResponse.data.address.zipcode, '33263', 'Incorrect zipcode');
        assert.strictEqual(userResponse.data.address.geo.lat, '-31.8129', 'Incorrect latitude');
        assert.strictEqual(userResponse.data.address.geo.lng, '62.5342', 'Incorrect longitude');
        assert.strictEqual(userResponse.data.phone, '(254)954-1289', 'Incorrect phone');
        assert.strictEqual(userResponse.data.website, 'demarco.info', 'Incorrect website');
        assert.strictEqual(userResponse.data.company.name, 'Keebler LLC', 'Incorrect company name');
        assert.strictEqual(userResponse.data.company.catchPhrase, 'User-centric fault-tolerant solution', 'Incorrect catchPhrase');
        assert.strictEqual(userResponse.data.company.bs, 'revolutionize end-to-end systems', 'Incorrect bs');
    });
});
