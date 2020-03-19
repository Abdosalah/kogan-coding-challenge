## Overview
This project was built using
- Nodejs v11.12.0 (Front-end) (JavaScript)
- go version 1.13.4  (Back-end) (Golang)

## To start the application
Please make sure you have NodeJs and Go installed on your machine.
1. run "yarn install"
1. run "yarn run build-server"
1. run "yarn start"

## To run the tests
1. FrontEnd :
run "yarn test"
then select "a" to run all the tests
1. BackEnd :
run "yarn test-server"

## Usage instructions
- When the application loads it will make a call to the backend using the api url defined in the src/config/keys.js file.
- The API Endpoint that was provided is sent as a parameter to the backend which is the one that makes the API call.
- The backend iterates over the products and calculates the CubicWeight for the ones with the desired category.
- That is sent back to the frontend which all it does is just display the data.

## Application Details
- I initially wanted to just make a frontend for it and handle all the calculations over there.
- Since the app is meant to be able to handle large inputs efficiently then i decided to make a backend in GO for that.
- Other than the fact that GO is much faster than javascript i also thought it is easier to scale and optimise the backend instead of relying on the user's device to do all the calculations.
