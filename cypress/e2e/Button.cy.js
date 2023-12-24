// cypress/integration/button.spec.js

describe('Button Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Replace with your actual local development server URL
    });
  
  
    it('renders a button with specified styles and size', () => {
      cy.get('.btn--outline').should('exist');
      cy.get('.btn--outline').should('have.class', 'btn--outline');
      cy.get('.btn--outline').should('have.class', 'btn--large');
    });
    it('renders a button with specified styles and size', () => {
        cy.get('.btn--outline').should('exist');
        cy.get('.btn--outline').should('have.class', 'btn--outline');
        cy.get('.btn--outline').should('have.class', 'btn--large');
      });
    
      it('renders a button with default style if style prop is not provided', () => {
        cy.get('.btn--medium').should('exist');
        cy.get('.btn--medium').should('have.class', 'btn--medium');
      });
    
      
});    