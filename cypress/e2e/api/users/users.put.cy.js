import { updateUserPut } from '../../../services/userService.js';

describe('Users API - PUT', () => {
  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('should update user successfully with PUT', () => {
    const userId = 2;

    updateUserPut(userId, userData.putUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(userData.putUser.name);
      expect(response.body.job).to.eq(userData.putUser.job);
      expect(response.body).to.have.property('updatedAt');
      expect(response.body.updatedAt).to.be.a('string');
    });
  });
});