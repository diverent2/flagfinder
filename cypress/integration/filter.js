describe("Searchfilter", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("a.button__search").click();
  });

  it("shows/hides remove filter button correctly", () => {
    cy.get(".searchbox__delete").should("not.have.class", "visible");
    cy.get("#search").type("g");
    cy.get(".searchbox__delete").should("have.class", "visible");
  });
});
