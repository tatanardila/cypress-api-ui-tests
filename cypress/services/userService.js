import { apiRequest } from "../utils/apiHelper";

export function getUsersList(page = 2){
    return apiRequest('GET', `/api/users?page=${page}`);
}

export function getSingleUser(userId){
    return apiRequest('GET',`/api/users/${userId}`);
}

export function createUser(userData){
    return apiRequest('POST','/api/users', userData)
}

export function getNonExistingUser(userId){
    return apiRequest('GET', `/api/users/${userId}`, null, false);
}

export function updateUserPut(userId, userData) {
  return apiRequest('PUT', `/api/users/${userId}`, userData);
}

export function updateUserPatch(userId, userData) {
  return apiRequest('PATCH', `/api/users/${userId}`, userData);
}

export function deleteUser(userId) {
  return apiRequest('DELETE', `/api/users/${userId}`);
}