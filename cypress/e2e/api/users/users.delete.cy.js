import { deleteUser } from "../../../services/userService.js";

describe('should delete an user succesfully', ()=>{

    it('sould to delete an user',()=>{
        const userId = 2;
        deleteUser(userId).then((response)=>{
            expect(response.body).to.be.undefined;
            expect(response.body).to.not.exist;
        })
    })
})