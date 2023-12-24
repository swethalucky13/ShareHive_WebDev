// cypress/integration/contactUs.spec.js

describe('ContactUs Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contactus'); // Replace with your actual local development server URL
  });

  it('renders contact form fields', () => {
    cy.get('#fullName').should('exist');
    cy.get('#email').should('exist');
    cy.get('#mobile').should('exist');
    cy.get('#message').should('exist');
  });

  it('updates state on input change', () => {
    const fullNameInput = cy.get('#fullName');
    fullNameInput.type('John Doe');
    fullNameInput.should('have.value', 'John Doe');
  });



  it('displays FAQ items and toggles visibility on click', () => {
    cy.get('.faq-item').should('have.length.greaterThan', 0);

    // Test clicking on the first FAQ item
    cy.get('.faq-item').first().click();
    cy.get('.faq-item.active').should('have.length', 1);
    cy.get('.faq-item.active p').should('be.visible');

    // Test clicking on another FAQ item
    cy.get('.faq-item').eq(2).click();
    cy.get('.faq-item.active').should('have.length', 1);
    cy.get('.faq-item.active p').should('be.visible');
  });
  
  it('successfully submits the contact form', () => {
    cy.visit('http://localhost:3000/contactus');
    // Fill in the form
    cy.get('#fullName').type('John Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#mobile').type('1234567890');
    cy.get('#message').type('This is a test message');
    // Intercept the window:alert event
    cy.on('window:alert', (message) => {
      // Assert that the alert message is as expected
      expect(message).to.equal('Form submitted successfully!');
    });
    // Submit the form
    cy.get('.button').click();
  });
  // Add more test cases as needed
});
