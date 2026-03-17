import { updateUserPatch } from '../../../services/userService.js';

describe('Users API - PATCH', () => {

  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  it('should update user job successfully with PATCH', () => {
    const userId = 2;

    updateUserPatch(userId, userData.patchUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq(userData.patchUser.job);
      expect(response.body).to.have.property('updatedAt');
      expect(response.body.updatedAt).to.be.a('string');
    });
  });
});