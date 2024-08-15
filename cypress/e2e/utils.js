exports.mockResponseStatusCode = (path, statusCode, req) =>
  cy
    .intercept(req, `https://fakestoreapi.com${path}`, {
      statusCode,
    })
    .as("submit");
