# ringo-project2

# BuildHub
A construction project tracking web app by Craig McGowan

![image](https://user-images.githubusercontent.com/87156044/137223630-997c7f8f-7e34-4e36-b28d-55d54def132c.png)

Link to deployment:
https://craigmcgowan-project2.herokuapp.com/

Link to GitHub Repo:
https://github.com/craig-mcgowan/ringo-project2

## Project Description
#### Project Description
Buildhub is an online project tracking database that allows users to manage and share projects among their organization. Users can log in and create projects, edit existing projects, and remove or archive inactive projects.

The below schema shows what information can be stored with in the app:

<img src = "public/images/Schema.png">

#### Instructions for Use
After signing in, users are directed to the project log which shows important details about all the user's projects at a glance. From there, they can add a new project or log out from the navbar menu. They can also click on a project name to enter the show page to view additional project details or photos. From the show page users can also edit or delete projects.
#### Wireframes and Planning Boards
![image](https://user-images.githubusercontent.com/87156044/137223423-ac038901-3aef-4f96-8665-ccc63382a662.png)

![image](https://user-images.githubusercontent.com/87156044/137223489-cae7e18a-ee3a-45c9-a4ee-5e56b0187c91.png)

![image](https://user-images.githubusercontent.com/87156044/137223544-b205b3d4-c52d-41e2-88a2-9059e70ec335.png)

#### Technologies Used
Javascript, HTML, CSS, ExpressJS, EJS, HTMX, NodeJS, SASS, Morgan, BCrypt, Trello
#### Code Snippets

Changing the header based on the current URL:

![image](https://user-images.githubusercontent.com/87156044/137224409-effee2a6-ae82-4a50-85d3-a503603b884b.png)

Creating the toggle button from checkbox to change the class:

![image](https://user-images.githubusercontent.com/87156044/137224582-1f265b70-e684-47e4-89a3-0b35a358e857.png)


Using Sass:

![image](https://user-images.githubusercontent.com/87156044/137224134-3065742b-fda6-4b36-8378-bd0477c14ce7.png)

Clean Server:

![image](https://user-images.githubusercontent.com/87156044/137224782-20f210c7-b58e-4580-ac98-369cfa271ee2.png)

#### Known bugs
On loading the show and edit pages, the browser will log a flow error in the console. The page must be refreshed for JavaScript to function

![image](https://user-images.githubusercontent.com/87156044/137223334-570f3543-7831-49de-abb5-1cc29f96e536.png)

#### Future Features
##### General
- Mobile Degin
- Project Sorting and Filtering
- Styling based on project stage/status
- Weather at site

##### Estimating 
- Insert and update square footage costs, unit, hourly/daily rates for trades 
- Calculate line items

##### Forms
- Fill out building access request forms and download as PDF

