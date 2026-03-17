import { loginUser, loginUserUnSuccesfully } from "../services/authService";

describe('Auth API - Login', ()=>{
    it('should login succesfully', ()=>{
        const credentials={
            email:'eve.holt@reqres.in',
            password: 'cityslicka'
        };

        loginUser(credentials).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            expect(response.body.token).to.be.a('string');
            expect(response.body.token).to.not.be.empty;        })
    });

    it('should return 400 when password is missing', ()=>{
        const credentials={
            email: 'peter@klaven'
        };

        loginUserUnSuccesfully(credentials).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.eq('Missing password');
        });
    });


});