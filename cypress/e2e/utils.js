exports.mockResponseStatusCode = (path, statusCode, req, body) => {
  return cy.intercept(req, `https://fakestoreapi.com${path}`, {
    statusCode,
    body,
  });
};

exports.signIn = () => {
  // Following example from clerk docs:
  // https://github.com/clerk/clerk-cypress-nextjs/blob/main/cypress/e2e/testing-tokens.cy.ts
  cy.get(".cl-signIn-root").should("exist");
  cy.get("input[name=identifier]").type(Cypress.env("test_user"));

  cy.get(".cl-formButtonPrimary").contains("button", "Continue").click();
  cy.get("input[name=password]").type(Cypress.env("test_password"));

  cy.get(".cl-formButtonPrimary").contains("button", "Continue").click();
};
