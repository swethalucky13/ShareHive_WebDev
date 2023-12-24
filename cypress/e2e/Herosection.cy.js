describe('HeroSection Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
    it('should navigate to the correct URL when Browse Rooms button is clicked', () => {
      // Click on the Browse Rooms button
      cy.contains('BROWSE ROOMS').click();
      // Assert that the URL has changed to the expected one
      cy.url().should('eq', 'http://localhost:3000/selfstudy');
    });

    it('should render the HeroSection component with correct content', () => {
        cy.get('.hero-container video').should('exist');
        cy.get('.hero-container h1').should('have.text', 'UNLOCK YOUR TRUE POTENTIAL');
        cy.get('.hero-container p').should('have.text', 'Studying alone? Not Anymore!');
      });
      
   });