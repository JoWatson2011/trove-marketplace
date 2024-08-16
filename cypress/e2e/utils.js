exports.mockResponseStatusCode = (path, statusCode, req, body) =>
  cy
    .intercept(req, `https://fakestoreapi.com${path}`, {
      statusCode,
      body,
    })
    .as("submit");
