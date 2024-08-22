import { mockResponseStatusCode } from "./utils";

describe("List an item for sale", () => {
  before(() => {
    mockResponseStatusCode("/products/categories", 200, "GET", ["A", "B", "C"]);
    mockResponseStatusCode("/auth/login", 200, "POST");
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
  it("posts the new item if all the inputs are correctly filled", () => {
    mockResponseStatusCode("/products", 200, "POST");
    
    cy.get("[data-cy='sell-nav']").click();
    cy.get('[data-cy="guest-log-in-button"]').click();

    cy.get("#item-name").should("have.value", "");
    cy.get("#item-description").should("have.value", "");
    cy.get("#item-image").should("have.value", "");
    cy.get("#item-price").should("have.value", "");
    cy.get("#pick-category").should("have.value", "");
    
    cy.get("#item-name").type("My item for sale");
    cy.get("#item-description").type("It's something you should buy.");
    cy.get("#item-image").type("www.myimage.com/image.jpeg");
    cy.get("#item-price").type("5");
    cy.get("#pick-category").type("A");

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("exist");

  });
  it("displays an error message if there is a network error", () => {
    mockResponseStatusCode("/products", 500, "POST");

    cy.get("[data-cy='sell-nav']").click();
    cy.get('[data-cy="guest-log-in-button"]').click();

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist");
  });
});
