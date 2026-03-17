import { loginUser, loginUserUnSuccesfully } from "../../../services/authService";
describe('Auth API - Login', ()=>{

    let authData;

    before(()=>{
        cy.fixture('authData').then((data)=>{
            authData = data;
        });
    });
    it('should login succesfully', ()=>{

        loginUser(authData.validLogin).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            expect(response.body.token).to.be.a('string');
            expect(response.body.token).to.not.be.empty;        })
    });

    it('should return 400 when password is missing', ()=>{

        loginUserUnSuccesfully(authData.invalidUser).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.eq('Empty request body');
        });
    });

});