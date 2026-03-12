import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

describe("login test", ()=> {

    let usersData; 
    before(()=>{
        cy.fixture('users').then((data)=>{
            usersData = data;
        });
    });
    it('should navigate to register page successfully', ()=>{
        LoginPage.open();
        LoginPage.goToCreateUser();

        cy.url().should('include', '/register');
        cy.get('#firstname').should('be.visible')
    });
 
     it('should fill register form successfully', () => {
      const { firstName, lastName, userName, password } = usersData.registerUser;

     RegisterPage.open();
     RegisterPage.fillForm(firstName, lastName, userName, password);
     });

     it('should login successfully', () => {
     const { username, password } = usersData.loginUser;
   
     LoginPage.open();
     LoginPage.login(username, password);
     });
})