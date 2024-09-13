import Form from '../../src/Form.jsx';
import '../../src/scss/style.css';
describe('Form.cy.jsx', () => {
    beforeEach(() => {
        cy.mount(<Form />);
    })
    it('proper input attributes', () => {
        cy.get('input').should('have.attr', 'class', 'list-input') //note: in React it's called className
        cy.get('input').should('have.attr', 'placeholder', 'Enter a task')
        cy.get('input').should('have.attr', 'type', 'text')
        cy.get('input').should('have.attr', 'spellCheck', 'false')
    })
    it('extra spaces are ignored', () => {
        cy.get('ol').find('li').should('have.length', 0)
        cy.get('[data-test="new"]').type('      ')
        cy.get('[data-test="add"]').click()
        cy.get('ol').find('li').should('have.length', 0) //empty strings won't be added to the list
    })
    //The rest has already been tested in an E2E testing type
})