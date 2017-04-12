# Thinkful React Starter

A template for developing React apps.

## Getting started

### Setting up a project

* Move into your projects directory: `cd ~/YOUR_PROJECTS_DIRECTORY`
* Clone this repository: `git clone https://github.com/oampo/thinkful-react-starter YOUR_PROJECT_NAME`
* Move into the project directory: `cd YOUR_PROJECT_NAME`
* Install the dependencies: `npm install`
* Create a new repo on GitHub: https://github.com/new
    * Make sure the "Initialize this repository with a README" option is left **un**checked
* Update the remote to point to your GitHub repository: `git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`

### Working on the project

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Run the development task: `npm run dev`
    * Starts a server running at http://localhost:8080
    * Automatically rebuilds when any of your files change



Update your Hot or Cold app to track and display the fewest number of guesses someone took to beat the game by accessing a simple API.

First you should create an API for saving and fetching the number of guesses:

Create a file called server.js that will contain a simple Node.js API
Set up Express, and make a GET and a POST endpoint to /fewest-guesses
When a GET request is made to /fewest-guesses it should return the fewest guesses taken to get the correct answer
The number of guesses can either be stored in-memory, or you can use a Mongo database
When a POST request is made to /fewest-guesses, it should update the guess count if the number of guesses provided is lower than the current best
Then update your app to fetch and send data to the API:

Add a fewestGuesses property to your Redux state
Update your app to display the fewestGuesses state in one of your components
Add two async actions (and their sync counterparts):
fetchFewestGuesses which should fetch the fewest guesses from the endpoint
saveFewestGuesses which should send a score to the fewest guesses endpoint
Dispatch the actions from your components so you keep track of the fewest guesses