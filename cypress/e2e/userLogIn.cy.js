import { mockResponseStatusCode } from "./utils";

describe("Log In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("logs in as a guest user", () => {
    mockResponseStatusCode("/auth/login", 200, "POST");
    mockResponseStatusCode("/users/1", 200, "GET");

    cy.get('[href="/login"]').click();
    cy.url().should("include", "/login");
    cy.get('[data-cy="guest-log-in-button"]').click();

    cy.url().should("not.include", "/login");
  });
  it("shows an error message if there is a network error", () => {
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
  it("displays logout and my account button in header when user is logged in, and login button when no user is logged in.", () => {
    mockResponseStatusCode("/auth/login", 200, "POST");
    mockResponseStatusCode("/users/1", 200, "GET", {
      username: "johnd",
      email: "john@gmail.com",
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "kilcoole",
        street: "new road",
        number: 7682,
        zipcode: "12926-3874",
      },
      phone: "1-570-236-7033",
    });

    cy.get('[href="/login"]').should("exist").click();
    cy.url().should("include", "/login");
    cy.get('[data-cy="guest-log-in-button"]').click();

    cy.get('[href="/login"]').should("not.exist");
    cy.get('[data-cy="logout-button"]').should("exist").click();
    cy.get('[href="/login"]').should("exist").click();
  });
});
