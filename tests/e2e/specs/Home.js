describe('Spotify search app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Should exist input for search', () => {
    cy.get('.search-container input').should('exist');
  });

  it('should search and list album names', () => {
    cy.get('input').type('the weekend');
    cy.get('.album-list li p').its('length').should('be.gte', 3);
  });

  it('should search and list album image', () => {
    cy.get('input').type('the weekend');
    cy.get('.album-list li:first img').should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('should search the artist and list artist name on artist tab', () => {
    cy.get('input').type('the weekend');
    cy.get('.tabs ul li a:nth(1)').click();
    cy.get('.album-list li p').its('length').should('be.gte', 3);
  });

  it('should search and list artist image', () => {
    cy.get('input').type('the weekend');
    cy.get('.tabs ul li a:nth(1)').click();
    cy.get('.album-list li:first img').should('be.visible').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
  });
});
