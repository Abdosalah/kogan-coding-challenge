## Overview
This project was built using 
- Nodejs v11.12.0 (Front-end)
- Python version 3.7.3 (Back-end)
- Virtualenv version 16.5.0 (Back-end)

## To start the application  
1. place the "credentials.py" file in the server directory
1. run "chmod +x server/buildScript"
2. run "chmod +x server/runScript"
3. run "npm install"
3. run "npm run build-server"
4. run "npm start"

## To run the tests
run "npm test"
then select "a" to run all the tests

## Usage instructions
- When the application loads it will fetch the tickets using the credentials
from the "credentials.py" and the api url defined in the src/config/keys.js file
- By clicking the details button under any ticket it will direct you to a page 
where the details of the ticket would be displayed
- if you wish to return to the home page just click on the "Back" button
- If more than 25 tickets are fetched then only 25 will be displayed per page and 
links to the other pages would be at the bottom of the page

## Application Details
- The front-end of the application is build using react and redux
- The back-end is built using Flask 
- Since i couldnt make my api calls from the front-end, i created a simple flask API that recieves the url from the front-end and uses it to make calls to the zendesk API. That way i was able to make the flask API as simple as possible and handle everything in my front-end application

## Assumptions
- If the data recieved from the zendesk API when fetching all tickets has an attribute "count" and "tickets" then the API call was successful
- If the data recieved from the zendesk API when fetching a specific ticket has an attribute "ticket" then the API call was successful

## Refrences 
- I learned react and redux through this video tutorial on youtube 
https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE and other technologies as well through the same channel.
- I also used https://www.lynda.com which is the best thing i have ever been introduced to,
it really helped me get through my degree since we are supposed to do A LOT of self learning.
