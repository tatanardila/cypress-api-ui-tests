import { getUsersList, getSingleUser, getNonExistingUser } from '../../../services/userService.js';
describe('Users API - GET', ()=> {
    it('should get users list Succesfully', ()=> {
        getUsersList(2).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.length(6)
            expect(response.body.page).to.eq(2)
            expect(response.body.data[0]).to.have.all.keys(
                'id',
                'email',
                'first_name',
                'last_name',
                'avatar'
                );
            });
    });

    it('should get a single user succesfully', () =>{
        getSingleUser(2).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('id', 2);
            expect(response.body.data).to.have.property('email');
            expect(response.body.data).to.have.property('first_name');
            expect(response.body.data).to.have.property('last_name');
            expect(response.body.data).to.have.property('avatar');
        });
    });

    it('should return 404 Non existing user', ()=>{
        getNonExistingUser(23).then((response)=>{
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.equal({})
        })
    })
});