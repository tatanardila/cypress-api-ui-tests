import BasePage from "./BasePage";

class RegisterPage extends BasePage {
    firstName = '#firstname';
    lastName = '#lastname';
    userName = '#userName';
    password = '#password';
    registerButton = '#register';
    
    open() {
        this.visit('/register');
        cy.url().should('include', '/register');
        cy.get(this.firstName).should('be.visible');
    }

    fillForm(firstName, lastName, userName, password){
        this.type(this.firstName, firstName);
        this.type(this.lastName, lastName);
        this.type(this.userName, userName);
        this.type(this.password, password);
    }

    submit(){
        this.click(this.registerButton);
    }

    register(firstName, lastName, userName, password){
        this.fillForm(firstName, lastName, userName, password);
        this.submit();
    }
}
export default new RegisterPage();