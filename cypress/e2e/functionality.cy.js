describe('functionality tests', () => {
    //Visit "cypress.config.js" to configure "baseUrl"
    beforeEach(() => {
        cy.visit('') //if the port changes, change it in "cypress.config.js" too
    })
    it('page loads', () => {
        cy.contains(/To-do list/i).should('be.visible')
        cy.get('h1').should('have.text', 'To-do list')
    })
    it('buttons work properly', () => {
        //let's make sure that an "add" button works
        cy.get('ol').find('li').should('have.length', 0)
        cy.get('[data-test="new"]').type('Prepare for exams 📚')
        cy.get('[data-test="add"]').click()
        cy.get('ol').find('li').should('have.length', 1)
        cy.get('[data-test="new"]').type('EAT PIZZA 🍕')
        cy.get('[data-test="add"]').click()
        cy.get('ol').find('li').should('have.length', 2)
        
        //let's test the 1st and the last task (not moving up or down accordingly)
        cy.get('ol').find('li').its(0).should('contain', 'Prepare for exams 📚')
        cy.get('ol').find('li').its(0).find('[data-test="up"]').click()
        cy.get('ol').find('li').its(0).should('contain', 'Prepare for exams 📚')
        cy.get('ol').find('li').its(1).should('contain', 'EAT PIZZA 🍕')
        cy.get('ol').find('li').its(1).find('[data-test="down"]').click()
        cy.get('ol').find('li').its(1).should('contain', 'EAT PIZZA 🍕')

        //let's test a "Delete" button
        cy.get('ol').find('li').should('not.have.length', 1)
        cy.get('ol').find('li').its(0).find('[data-test="delete"]').click()
        cy.get('ol').find('li').should('have.length', 1)

        //let's test an "up" and "down" buttons
        cy.get('[data-test="new"]').type('Prepare for exams 📚')
        cy.get('[data-test="add"]').click()
        cy.get('[data-test="new"]').type('Cook the dinner 🥘')
        cy.get('[data-test="add"]').click()
        cy.get('[data-test="new"]').type('Go for a walk 🚶🏻‍♂️')
        cy.get('[data-test="add"]').click()
        cy.get('[data-test="new"]').type('Have fun 😊')
        cy.get('[data-test="add"]').click()
        cy.get('[data-test="new"]').type('Sing 🎙')
        cy.get('[data-test="add"]').click()
        cy.get('[data-test="new"]').type('Listen to music 🎼')
        cy.get('[data-test="add"]').click()
        cy.get('[data-test="new"]').type('Fall asleep 😴')
        cy.get('[data-test="add"]').click()
        cy.scrollTo('top')
        cy.get('ol').find('li').its(1).should('not.contain', 'EAT PIZZA 🍕')
        cy.get('ol').find('li').its(0).find('[data-test="down"]').click()
        cy.get('ol').find('li').its(1).should('contain', 'EAT PIZZA 🍕')
        cy.get('ol').find('li').its(2).should('not.contain', 'Go for a walk 🚶🏻‍♂️')
        cy.get('ol').find('li').its(3).find('[data-test="up"]').click()
        cy.get('ol').find('li').its(2).should('contain', 'Go for a walk 🚶🏻‍♂️')
        cy.scrollTo('top')
    })
})