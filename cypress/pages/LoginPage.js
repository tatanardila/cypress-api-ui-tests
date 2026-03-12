import BasePage from "./BasePage"

class LoginPage extends BasePage {

    username = '#userName'
    password = '#password'
    loginButton = '#login'

    newUserbtn = '#newUser'

    open(){
        this.visit('/login')
        cy.url().should('include', '/login')
        cy.get(this.username).should('be.visible')
    }

    login(username, password){
        this.type(this.username, username);
        this.type(this.password, password);
        this.click(this.loginButton);
    }
    goToCreateUser(username, password){
        this.click(this.newUserbtn);
    }
}

export default new LoginPage();