import { getHeaders } from '../../utils/helpers';

describe('API Users Test', () => {

  it('get list', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiBaseUrl')}/api/users?page=2`,
      headers: getHeaders()
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length(6);
      expect(response.body.page).to.eq(2);
    });
  });

  it('POST create user', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiBaseUrl')}/api/users`,
      headers: getHeaders(),
      body: {
        name: 'Juan',
        job: 'QA Engineer'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Juan');
      expect(response.body.job).to.eq('QA Engineer');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

}); 