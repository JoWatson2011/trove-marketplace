exports.mockResponseStatusCode = (path, statusCode, req, body) => {
  return cy.intercept(req, `https://fakestoreapi.com${path}`, {
    statusCode,
    body,
  });
};
