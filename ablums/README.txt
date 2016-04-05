## Assignment

> The assignment is to write a simple NodeJS web server/client application that displays a list of music albums. You should use the file 
`sample-data.json` as the source of the album data.

1. `<host>:3000/api/albums` should act as your API endpoint and return a JSON encoded list of music albums
2. `<host>:3000/` should render the album list in the client browser
3. Each item in the list should include:
    - a small preview of the album's cover (`imageURLSmall`)
    - the title of the album
    - artist
    - year of the album
4. Clicking an album item should display the full cover image (`imageURLLarge`)
5. `<host>:3000/albums`should have content similar to `<host>:3000/` but with multiple views of the album list (e.g. "list view", "grid view", "carousel view", etc)
6. The overall design of `<host>:3000/albums` should be responsive (mobile, tablet, desktop)
7. Please track your changes in a local git repository and provide the repository in your solution. It is easiest to zip the entire project folder containing the repository.

## Suggested Project Structure
> Feel free to modify the folder structure as necessary

    /hiring-nodejs-<candidate-name>   # example: "hiring-nodejs-walter-white"; "hiring-nodejs-boba-fett"
    |-- + public                      # folder for client side resources (js, images, css)
    |
    |-- + routes
    |   |-- api.js                    # API routes
    |   `-- index.js                  # web server routes
    |
    |-- + views                       # folder for angularjs templates
    |
    |-- package.json                  # metadata and dependencies needed to install project from npm
    |-- README.md                     # this file!
    |-- sample-data.json              # API data source
    `-- server.js                     # web server


## Notes

- The purpose of this challenge is to test your ability to design, code, and debug a simple web application in 4 hours or less.
- Your submission will be evaluated based on code quality (elegance, readability, flexibility), responsiveness, and general design.
- Your solution should be able to be run by any environment with NodeJS via `npm start` or `node server.js`
- It is encouraged to utilize a client side framework such as Angular, Ember, Backbone, etc.
- You can use open source libraries but you may be questioned on your understanding of the libraries as well as alternative solutions.
- **Please do not post your solution on GitHub, or other searchable code repositories.**


## Extra Credit

- Implement a client side search feature in any of the pages
- Sort albums by title/year/artist/etc in any of the pages
- Any additional features not listed here are also encouraged


## References

- [NodeJS API](https://nodejs.org/api/)
- [Express API](http://expressjs.com/4x/api.html)
- [Git help](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init/)

