# Project Structure

This project uses cypress to implement the test cases specified in the assignment. It follows the basic npm project template (created using `npm init -y`).
All test files are located in `e2e/*`.  Without having any other contextual knowledge of the project, I decided to organize the tests by webpages:

> e2e/aboutUs.cy.js

 - *User is able to click on Company and then on “About Cypress”*

> e2e/homePage.cy.js

 - *User is able to click on “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev”*
 - *Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number.* 

> e2e/cypressCloud.cy.js

 - *User is able to click on “Product” and then “visual review”*
 - *User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics”*


# CI Pipeline

This project contains a basic github workflow which has been configured to trigger on push and manual. This is done for demonstration purposes only. A real project can use other triggers (scheduled runs, etc.). The results from the CI Pipeline are also published on Cypress Cloud.


# Cypress Cloud

To view and debug test cases for proper visibility, this project publishes the results from the test runs on the CI to the Cypress Cloud instead of using report generators like `mochawesome` on CI. 

The Cypress Cloud Dashboard for this project can be accessed at https://cloud.cypress.io/projects/yu2fm9/runs
