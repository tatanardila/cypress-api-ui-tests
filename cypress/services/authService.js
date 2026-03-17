import { apiRequest } from "../utils/apiHelper";

export function loginUser(credentials){
    return apiRequest('POST', '/api/login', credentials);
}

export function loginUserUnSuccesfully(credentials){
    return apiRequest('POST', '/api/login', credentials, false);
}

export function registerUser(credentials){
    return apiRequest('POST','/api/register', credentials )
};

export function registerUserUnsuccessfully(credentials){
    return apiRequest('POST','/api/register', credentials, false );
};
