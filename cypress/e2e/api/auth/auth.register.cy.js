import {registerUser, registerUserUnsuccessfully} from '../../../services/authService.js';

describe('Register users / API POST', ()=>{
    let authData;   
before(()=>{
        cy.fixture('authData').then((data)=>{
            authData=data;
        });
    });

    it('should create an user', ()=>{
        registerUser(authData.validRegister).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            expect(response.body.token).to.be.a('string');
            expect(response.body.token).to.not.be.empty;
            
        });
    });

    it('should return 400 when password is missing in register', ()=>{
        registerUserUnsuccessfully(authData.invalidRegister).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.eq('Missing password')
        });
    });


});