describe('styling tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('proper colours', () => {
        /*Cypress uses RGB to compare. Colours for the project are set in HSL format. 
        Let's use RGB as input for tests*/
        cy.get('body').should('have.css', 'background-color', 'rgb(3, 7, 48)')
        cy.get('h1').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[data-test="new"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('[data-test="add"]').should('have.css', 'background-color', 'rgb(11, 117, 20)')
                                      .and('have.css', 'color', 'rgb(255, 255, 255)')

        cy.get('[data-test="new"]').type('Test colours')
        cy.get('[data-test="add"]').click()
        cy.get('ol').find('li').should('have.css', 'background-color', 'rgb(247, 247, 247)')
        cy.get('ol').find('li').should('have.css', 'color', 'rgb(0, 0, 0)')
        cy.get('[data-test="delete"]').should('have.css', 'background-color', 'rgb(136, 17, 17)')
                                         .and('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[data-test="up"]').should('have.css', 'background-color', 'rgb(17, 110, 187)')
                                         .and('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[data-test="down"]').should('have.css', 'background-color', 'rgb(17, 110, 187)')
                                         .and('have.css', 'color', 'rgb(255, 255, 255)')
    })
    it('proper fonts', () => {
        //Pay attention to testing font-families with '..., "Times New Roman"', etc.
        cy.get('h1').should('have.css', 'font-family', '"Circular Std 2", Arial, sans-serif')
        cy.get('[data-test="new"]').type('Test fonts')
        cy.get('[data-test="add"]').click()
        cy.get('[data-test="task"]').should('have.css', 'font-family', '"Circular Std 2", Arial, sans-serif')
        cy.get('button').should('have.css', 'font-family', '"Circular Std 2", Arial, sans-serif')
        cy.get('input[type="text"]').should('have.css', 'font-family', '"Circular Std 2", Arial, sans-serif')
    })
    it('mobile layout works correctly', () => {
        cy.get('[data-test="form"]').should('not.have.css', 'display', 'flex')
                                       .and('not.have.css', 'flex-direction', 'column')
                                       .and('not.have.css', 'align-items', 'center')
        cy.get('h1').should('not.have.css', 'font-size', '40px')
        cy.get('input[type=text]').should('not.have.css', 'font-size', '24px')
        cy.get('[data-test="add"]').should('not.have.css', 'font-size', '24px')
        cy.get('[data-test="new"]').type('Test mobile layout')
        cy.get('[data-test="add"]').click()
        cy.get('li').should('not.have.css', 'font-size', '16px')
        cy.get('[data-test="delete"]').should('not.have.css', 'font-size', '11.2px')
        cy.get('[data-test="up"]').should('not.have.css', 'font-size', '11.2px')
        cy.get('[data-test="down"]').should('not.have.css', 'font-size', '11.2px')

        //let's set some mobile size viewport and test it
        cy.viewport(699, 950) //width = 699px, height = 950px
        
        cy.get('[data-test="form"]').should('have.css', 'display', 'flex')
                                       .and('have.css', 'flex-direction', 'column')
                                       .and('have.css', 'align-items', 'center')
        cy.get('ol').should('have.css', 'display', 'flex')
                       .and('have.css', 'flex-direction', 'column')
                       .and('have.css', 'align-items', 'center')
        cy.get('h1').should('have.css', 'font-size', '40px') //Cypress uses pixels to compare to
        cy.get('input[type=text]').should('have.css', 'font-size', '24px')
        cy.get('[data-test="add"]').should('have.css', 'font-size', '24px')
        cy.get('li').should('have.css', 'font-size', '16px')
        cy.get('[data-test="delete"]').should('have.css', 'font-size', '11.2px')
        cy.get('[data-test="up"]').should('have.css', 'font-size', '11.2px')
        cy.get('[data-test="down"]').should('have.css', 'font-size', '11.2px')
    })
})