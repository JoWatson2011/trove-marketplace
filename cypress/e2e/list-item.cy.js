import { mockResponseStatusCode } from "./utils";

describe("List an item for sale", () => {
  before(() => {
    mockResponseStatusCode("/products/categories", 200, "GET", ["A", "B", "C"]);
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
  });
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("only allows access to the list item page if the user is logged in", () => {
    cy.get('[data-cy="login-nav"]').should("exist");
    cy.get("[data-cy='sell-nav']").click();

    cy.url().should("include", "/login");
    cy.get('[data-cy="guest-log-in-button"]').click();

    cy.url().should("include", "list-item");
  });
});
