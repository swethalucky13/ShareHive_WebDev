// cypress/integration/app.spec.js

describe('App Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Replace with your actual local development server URL
    });
  
    it('should navigate to Contact Us page', () => {
      // Click on the Contact Us link in Navbar
      cy.get('.navbar a[href="/contactus"]').click();
      // No assertion here
    });

    it('should navigate to Home page', () => {
      cy.get('.nav-links').contains('Home').click();
      cy.url().should('include', '/');
    });
    it('should navigate to Study Hive page', () => {
      cy.get('.nav-links').contains('Study Hive').click();
      cy.url().should('include', '/services');
    });
    it('should navigate to About page', () => {
      cy.get('.nav-links').contains('About').click();
      cy.url().should('include', '/about');
    });
    it('should navigate to ChatRoom page', () => {
      cy.get('.nav-links').contains('ChatRoom').click();
      cy.url().should('include', '/chat');
    });
    it('should navigate to Contact Us page', () => {
      cy.get('.nav-links').contains('Contact Us').click();
      cy.url().should('include', '/contactus');
    });
    it('should navigate to Self Study page from mobile menu', () => {
      cy.viewport('iphone-6');
      cy.get('.menu-icon').click();
      cy.get('.nav-links-mobile').contains('Self Study').click();
      cy.url().should('include', '/selfstudy');
    });
    it('should display Self Study button', () => {
      cy.viewport(1200, 800); // Assuming 1200px width, adjust as needed
      cy.get('.btn--outline').should('be.visible');
    });
  
    // Add more test cases as needed
  });
  