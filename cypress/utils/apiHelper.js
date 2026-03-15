import { getHeaders } from './helpers';

export function apiRequest(method, endpoint, body = null, failOnStatusCode = true) {
  return cy.request({
    method,
    url: `${Cypress.env('apiBaseUrl')}${endpoint}`,
    headers: getHeaders(),
    body,
    failOnStatusCode
  });
}