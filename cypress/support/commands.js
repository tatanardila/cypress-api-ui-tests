import cypress from "cypress";
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage";

Cypress.Commands.add("login", (username, password) => {
  LoginPage.open()
  LoginPage.login(username, password)
});

Cypress.Commands.add("goToCreateUser", () => {
  LoginPage.open()
  LoginPage.goToCreateUser()
});

cypress.Commands.add('registerUser',(firstName, lastName, userName, password) =>{
  RegisterPage.open();
  RegisterPage.register(firstName, lastName, userName, password);
});
