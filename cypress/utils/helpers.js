export function getHeaders() {
  return {
    'x-api-key': Cypress.env('REQRES_API_KEY'),
    'Content-Type': 'application/json'
  };
}