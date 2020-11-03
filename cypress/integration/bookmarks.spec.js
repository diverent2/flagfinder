describe('Bookmarks', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.wait(200);
      cy.get("[data-cy-bookmark]").first().check();
      cy.get("[data-cy-bookmark]").eq(3).check();
      cy.get("[data-cy-bookmark]").eq(5).check();
    });
  
    it('can safe bookmarks and remember them throughout side navigation [session]', () => {
        cy.get('[data-cy-sidenav-button="about"]').click();
        cy.get("[data-cy-back-button]").click();

        cy.get("[data-cy-bookmark]").first().should("be.checked");
        cy.get("[data-cy-bookmark]").eq(3).should("be.checked"); 
    });

    it('displays the bookmarked flags', () => {
        cy.get('[data-cy-sidenav-button="bookmarks"]').click();
        cy.get("[data-cy-flagcard]").should("have.length", 3);
    });

    it('can remove flags from bookmarks dynamically', () => {
        cy.get('[data-cy-sidenav-button="bookmarks"]').click();
        cy.get("[data-cy-flagcard]").should("have.length", 3);
        cy.get("[data-cy-bookmark]").first().uncheck();
        cy.get("[data-cy-flagcard]").should("have.length", 2);
    });
});