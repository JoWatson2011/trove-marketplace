import { mockResponseStatusCode, signIn } from "./utils";
import { setupClerkTestingToken } from "@clerk/testing/cypress";


describe("List an item for sale", () => {
  before(() => {
    mockResponseStatusCode("/products/categories", 200, "GET", ["A", "B", "C"]);
  });
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("only allows access to the list item page if the user is logged in", () => {
    setupClerkTestingToken();
    cy.get('[data-cy="login-nav"]').should("exist");
    cy.get("[data-cy='sell-nav']").click();

    cy.url().should("include", "/sign-in");

    signIn();
    cy.get('[data-cy="list-item-form"]').should("be.visible");
  });
  it("posts the new item if all the inputs are correctly filled", () => {
    mockResponseStatusCode("/products", 200, "POST");

    cy.get("[data-cy='sell-nav']").click();
    signIn();

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
    cy.get('[data-cy="success-message"]').should("exist").should("be.visible");
  });
  it("displays an error message if there is a network error", () => {
    mockResponseStatusCode("/products", 500, "POST");

    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
  it("displays an error message if the form is empty on submitted", () => {
    cy.get("[data-cy='sell-nav']").click();
    signIn();


    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
  it("displays an error message if the item name input is empty on submitted", () => {
    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get("#item-description").type("It's something you should buy.");
    cy.get("#item-image").type("www.myimage.com/image.jpeg");
    cy.get("#item-price").type("5");
    cy.get("#pick-category").type("A");

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
  it("displays an error message if the item description input is empty on submitted", () => {
    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get("#item-name").type("My item for sale");
    cy.get("#item-image").type("www.myimage.com/image.jpeg");
    cy.get("#item-price").type("5");
    cy.get("#pick-category").type("A");

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
  it("displays an error message if the item image input is empty on submitted", () => {
    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get("#item-name").type("My item for sale");
    cy.get("#item-description").type("It's something you should buy.");
    cy.get("#item-price").type("5");
    cy.get("#pick-category").type("A");

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
  it("displays an error message if the item price input is empty on submitted", () => {
    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get("#item-name").type("My item for sale");
    cy.get("#item-description").type("It's something you should buy.");
    cy.get("#item-image").type("www.myimage.com/image.jpeg");
    cy.get("#pick-category").type("A");

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
  it("displays an error message if the item category input is empty on submitted", () => {
    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get("#item-name").type("My item for sale");
    cy.get("#item-description").type("It's something you should buy.");
    cy.get("#item-image").type("www.myimage.com/image.jpeg");
    cy.get("#item-price").type("5");

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="success-message"]').should("not.exist");
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
  it("doesn't allow non-integer values to be inputted as the item price", () => {
    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get("#item-price")
      .type("ABC")
      .should("have.value", "")
      .type("5")
      .should("have.value", "5");
  });
  it("only allows image urls to be submitted as the image input", () => {
    mockResponseStatusCode("/products", 200, "POST");

    cy.get("[data-cy='sell-nav']").click();
    signIn();

    cy.get("#item-name").type("My item for sale");
    cy.get("#item-description").type("It's something you should buy.");
    cy.get("#item-image").type("a random string");
    cy.get("#item-price").type("5");
    cy.get("#pick-category").type("A");

    cy.get('[data-cy="form-button"]').click();
    cy.get('[data-cy="error-message"]').should("exist").should("be.visible");
  });
});
