// cypress/integration/speechRecognition.spec.js

describe('SpeechRecognitionComponent', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/services'); // Replace with your actual local development server URL
    });
  
    it('should render the SpeechRecognitionComponent and start/stop transcription', () => {
      cy.get('#language').select('en'); // Change the language as needed
  
      // Video call assertions
      cy.get('#call iframe').should('exist'); // Check if the video call iframe exists
      cy.get('#controls select').should('exist'); // Check if the language selection dropdown exists
      cy.get('#controls button#start').should('exist'); // Check if the start transcription button exists
      cy.get('#controls button#stop').should('exist'); // Check if the stop transcription button exists
    });

    it('should change language on dropdown selection', () => {
      cy.get('#language').select('es'); // Change to the desired language code
  
      // Check if the selected language is updated
      cy.get('#language').should('have.value', 'es');
    });
  
    // Add more test cases as needed
  });
  