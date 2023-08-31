# PWA-Text-Editor

Text Editor Web Application
Table of Contents
User Story
Acceptance Criteria
Technologies Used
Installation
Usage
Contributing
License
User Story
md
Copy code
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
Acceptance Criteria
md
Copy code
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application


## Technologies Used:

JavaScript
Node.js
Express.js
IndexedDB
Webpack
Workbox
Heroku


## Installation

Clone the repository: git clone https://github.com/ARS2989/PWA-Text-Editor
Navigate to the project directory: cd PWA-text-editor-app
Install the dependencies: npm install


## Usage

Start the backend and client server: npm run start
Open your browser and access the application at http://localhost:3000


## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Developed by Andres Solorio (https://github.com/ARS2989/PWA-Text-Editor) - Creating a user-friendly text editor application to enhance productivity for developers.