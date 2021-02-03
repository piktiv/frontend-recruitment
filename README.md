# Programming Home Assignment
The goal of this assignment is to create a single page application (SPA) containing a dynamically rendered registration form.

There should be three different paths in the application:
* http://localhost:4200/ - Home page
* http://localhost:4200/registration - dynamic registration form
* http://localhost:4200/welcome - welcome page to display after registration

## Flow for the application
Home page is the inital page the user is greeted with, this page contains a button that takes the user to the registration form.

When the registration form is first loaded, it makes a request to fetch the example response provided and builds the form based on this. If the user types something that doesn't match the validation an inline error should appear beneath the input and the 'Register' button should be disabled.

Once the user has filled out all the required fields with correct data and presses the 'Register' button the application redirect the user to the welcome page where it shows a message 'Welcome $first_name!' where $first_name is replaced with the first name provided in the form.

## Requirements
* Should be developed with a SPA framework
* Password field should hide password by default and have a button to toggle if password is visible

## Bonus
* Validate incoming data from the response, and show an error when the received data doesn't match expectations. This could be done with [class-validator](https://github.com/typestack/class-validator)
* Cover the code with unit tests
* Cover the code with e2e tests
* Dockerise the application
