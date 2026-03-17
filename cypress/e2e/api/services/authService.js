import { apiRequest } from "../../../utils/apiHelper";

export function loginUser(credentials){
    return apiRequest('Post', '/api/login', credentials);
}

export function loginUserUnSuccesfully(credentials){
    return apiRequest('Post', '/api/login', credentials, false);
}

