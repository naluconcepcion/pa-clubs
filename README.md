# PA CLUBS
### A CSC630 final project by Nalu Concepcion and Liv Märtens

You can find our project [here](http://pa-clubs.herokuapp.com/).
## Explanation
This is an application developed for Andover students to view a list of all currently existent clubs at Phillips Academy, Andover. The location and meeting time of the clubs has been omitted for security reasons, but by permitting users to view a list of all Andover Clubs, anyone with an Andover Directory can contact all relevant parties if they are interested. 

Certain users with superuser credentials are permitted to create new clubs or edit current entries. In the future, we hope to also add in the functionality which allows users to be verified as club leaders and then to be be granted permissions to edit their own entries. 

## How to use
Simply clone this repository, install all required packages and start your React Scripts with ```npm start```. We are currently still fixing the frontend http://pa-clubs.herokuapp.com, so it is best not to use this. once you start your frontend locally, you can sign up immediately, see all the clubs and see who else is using this app!

## Security Audit
Right now everyone can sign up, no matter whether their email is valid. They also don't have to confirm that the email-address they entered is correct. This would be one of the first things to fix. We also accidentally send passwords to the client side. This could easily be fixed if we had more time. 
