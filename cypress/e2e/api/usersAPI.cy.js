import { apiRequest } from '../../utils/apiHelper';

describe('API Users Test', () => {

  it('should get list succesfully', () => {
    cy.log(`API URL: ${Cypress.env('apiBaseUrl')}`);
  cy.log(`API KEY exists: ${!!Cypress.env('REQRES_API_KEY')}`);
    
    apiRequest('GET', '/api/users?page=2').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length(6);
      expect(response.body.page).to.eq(2);
    });
  });

  it('should create user successfully', () => {
    apiRequest('POST', '/api/users',{ 
        name: 'Juan',
        job: 'QA Engineer'}
      ).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Juan');
      expect(response.body.job).to.eq('QA Engineer');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('should get a single user succesfully', ()=>{
    apiRequest('GET', '/api/users/2').then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id', 2);
      expect(response.body.data).to.have.property('email');
      expect(response.body.data).to.have.property('first_name');
      expect(response.body.data).to.have.property('last_name');
      expect(response.body.data).to.have.property('avatar');
    })
  })

  it('should return 404 for a non-existing user', () => {
  apiRequest('GET', '/api/users/23', null, false).then((response) => {
    expect(response.status).to.eq(404);
    expect(response.body).to.deep.equal({});
  });
  });
});
