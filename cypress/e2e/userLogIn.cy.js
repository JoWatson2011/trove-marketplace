import { mockResponseStatusCode } from "./utils";

describe("Log In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("logs in as a guest user", () => {
    mockResponseStatusCode("/auth/login", 200, "POST");
    mockResponseStatusCode("/users/1", 200, "GET");

    cy.get('[href="/login"]').click();
    cy.url().should('include', '/login')
    cy.get('[data-cy="guest-log-in-button"]').click();

    cy.url().should("not.include", "/login");
  });
  it("shows an error message if there is anetwork error", () => {
    mockResponseStatusCode("/auth/login", 500, "POST");

    cy.get('[href="/login"]').click();
    cy.url().should("include", "/login");
    cy.get('[data-cy="guest-log-in-button"]').click();

    cy.url().should("include", "/login");
    cy.get('[data-cy="error-message"]').should(
      "contain.text",
      "Network error. Please try again later."
    );
  });
});
