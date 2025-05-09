import { mockResponseStatusCode, signIn } from "./utils";
import { setupClerkTestingToken } from "@clerk/testing/cypress";

describe("Log In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("displays logout and my account button in header when user is logged in, and login button when no user is logged in.", () => {
    cy.get('[component="SignUpButton"]').should("exist");
    cy.get('[component="SignInButton"]').should("exist").click();
    cy.url().should("include", "/sign-in");
    signIn();

    cy.get('[component="SignUpButton"]').should("not.exist");
    cy.get('[component="SignInButton"]').should("not.exist");
    cy.get('[href="my-account"]').should("exist");
    cy.get('[component="SignOutButton"]').should("exist").click();

    cy.get('[component="SignUpButton"]').should("exist");
    cy.get('[component="SignInButton"]').should("exist");
  });
});
// ✏️ TODO: Can only access protected routes on log in
// ✏️ TODO: My account page contains information of logged in user
