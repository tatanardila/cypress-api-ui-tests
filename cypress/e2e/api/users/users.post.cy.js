import { createUser } from "../services/userService";

describe('Users API', ()=> { 
    it('should create user succesfully', ()=>{
        const userData = {
            name: 'juan',
            job: 'QA Engineer'
        };

    createUser(userData).then((response)=>{
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
        expect(response.body.name).to.eq(userData.name);
        expect(response.body.job).to.eq(userData.job);

    })
    });
})