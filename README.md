# JAMBAND
![image](public/images/jamband-cover-photo.png)

## A virtual community of musicians where you can post jam sessions you'd like to host and invite other musicians to connect with you to play music together

### How does it work?
> Do you feel like jamming?  You play the guitar, but you need a drummer and a bassist?  Or, you're missing the fourth in your string quartet? JamBand connects you with other musicians so you can play music together!

### How it works
1. [Click here to go to JamBand!](https://jamband.herokuapp.com/event)
2. click "Register" in the top left corner to create a username and profile.
3. Add a jamming event so that others near you can join the event!

### Technologies Used
- JavaScript
- HTML5
- CSS3
- React
- SQL
- Sqlite (in development)
- Peewee
- Flask
- Python 

### Wireframe
#### Planning the layout of the SQL data tables
![views](public/images/SQL-data-wireframe.png)
##### The Home page
![home page](public/images/wireframe_homepage.JPG)
##### Events page
![events page](public/images/wireframe_events.JPG)

### The Group
This project was painstakenly and tirelessly worked on by Jeremy Yandell and Erin Johnson.  Erin was the github manager and drafted the readme file.  Jeremy and Erin mostly created this app using pair programming with a driver/navigator format where one person typed while the other directed.  During this process the pair communicated well with each other to solve challenging problems despite different ways of learning and troubleshooting.

#### Functionality we are still working on
- auto-joining the user who created the event to the event as the first attendee
- remove edit/delete buttons on an event if it was not created by that user
- add edit/delete functionality for user
- successful deployment to heroku
- listing events joined by a user on their profile page
- fixing navbar
- a landing page with description of app and how to use it


#### Future Features We'd Love to Add
- An API of all the instrments and musical equipment so that when users post events they are hosting, they can list the instruments they are looking for and other users can indicate which instrument they will be bringing to the event
    - this would also allow users to add instruments they play to their profile for a complete list of their talents!
- Search functionality for events near users or by instrument
- Incorporating google maps API so that the events populate on a searchable map
- Incorporating google calendar API so that users can add events to a user calendar in their profile
