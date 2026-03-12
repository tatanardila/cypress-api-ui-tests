class BasePage {
    visit(url){
        cy.visit(url)
    }
    click(element){
        cy.get(element).click()
    }

    type(element, text){
        cy.get(element).clear().type(text);
    }

    getElement(element){
        return cy.get(element)
    }
}

export default BasePage