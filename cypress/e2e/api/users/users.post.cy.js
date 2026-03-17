import { createUser } from "../../../services/userService";

describe('Users API', ()=> { 
    let userData;
       before(()=>{
        cy.fixture('userData').then((data)=>{
            userData=data;
        });
       });
    it('should create user succesfully', ()=>{   
    createUser(userData.createUser).then((response)=>{
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(userData.createUser.name);
        expect(response.body.job).to.eq(userData.createUser.job);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
    })
    });
})