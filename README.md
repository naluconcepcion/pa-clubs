# PA CLUBS
### A CSC630 final project by Nalu Concepcion and Liv Märtens

You can find our project [here](http://pa-clubs.herokuapp.com/).
## Explanation
This is an application developed for Andover students to check when certain clubs are meeting and who is attending these meetings. Certain users can create new clubs and everyone can access a list of clubs, their meeting times and the attendees.
## How to use
Simply clone this repository, install all required packages and start your React Scripts with ```npm start```. We are currently still fixing the frontend http://pa-clubs.herokuapp.com, so it is best not to use this. once you start your frontend locally, you can sign up immediately, see all the clubs and see who else is using this app!
## Security Audit
Right now everyone can sign up, no matter whether their email is valid. They also don't have to confirm that the email-address they entered is correct. This would be one of the first things to fix. We also accidentally send passwords to the client side. This could easily be fixed if we had more time. 
