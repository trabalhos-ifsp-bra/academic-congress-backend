Isso é um fork
--------------

O esqueleto deste projeto foi fortemente baseado [neste repositorio](https://github.com/sahat/hackathon-starter)
para ver mais detalhes, veja seu README.

Prerequisites
-------------

- [MongoDB](https://www.mongodb.com/download-center/community)
- [Node.js 8.0+](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs) OR [Visaul Studio Code](https://code.visualstudio.com) + [Windows Subsystem for Linux - Ubuntu](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

**Note:** If you are new to Node or Express, I recommend to watch
[Node.js and Express 101](https://www.youtube.com/watch?v=BN0JlMZCtNU)
screencast by Alex Ford that teaches Node and Express from scratch. Alternatively,
here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| .travis.yml                        | Configuration files for continue integration.                |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| @octokit/rest                   | GitHub API library.                                                     |
| bcrypt                          | Library for hashing and salting user passwords.                         |
| body-parser                     | Node.js body parsing middleware.                                        |
| chai                            | BDD/TDD assertion library.                                              |
| chalk                           | Terminal string styling done right.                                     |
| cheerio                         | Scrape web pages using jQuery-style syntax.                             |
| clockwork                       | Clockwork SMS API library.                                              |
| compression                     | Node.js compression middleware.                                         |
| connect-mongo                   | MongoDB session store for Express.                                      |
| dotenv                          | Loads environment variables from .env file.                             |
| errorhandler                    | Development-only error handler middleware.                              |
| eslint                          | Linter JavaScript.                                                      |
| eslint-config-airbnb-base       | Configuration eslint by airbnb.                                         |
| eslint-plugin-chai-friendly     | Makes eslint friendly towards Chai.js 'expect' and 'should' statements. |
| eslint-plugin-import            | ESLint plugin with rules that help validate proper imports.             |
| express                         | Node.js web framework.                                                  |
| express-flash                   | Provides flash messages for Express.                                    |
| express-session                 | Simple session middleware for Express.                                  |
| express-status-monitor          | Reports real-time server metrics for Express.                           |
| express-validator               | Easy form validation for Express.                                       |
| fbgraph                         | Facebook Graph API library.                                             |
| instagram-node                  | Instagram API library.                                                  |
| lastfm                          | Last.fm API library.                                                    |
| lob                             | Lob API library.                                                        |
| lusca                           | CSRF middleware.                                                        |
| mocha                           | Test framework.                                                         |
| mongoose                        | MongoDB ODM.                                                            |
| morgan                          | HTTP request logger middleware for node.js.                             |
| multer                          | Node.js middleware for handling `multipart/form-data`.                  |
| node-foursquare                 | Foursquare API library.                                                 |
| node-linkedin                   | LinkedIn API library.                                                   |
| node-sass                       | Node.js bindings to libsass.                                            |
| node-sass-middleware            | Sass middleware compiler.                                               |
| nyc                             | Coverage test.                                                          |
| nodemailer                      | Node.js library for sending emails.                                     |
| passport                        | Simple and elegant authentication library for node.js.                  |
| passport-facebook               | Sign-in with Facebook plugin.                                           |
| passport-github                 | Sign-in with GitHub plugin.                                             |
| passport-google-oauth           | Sign-in with Google plugin.                                             |
| passport-instagram              | Sign-in with Instagram plugin.                                          |
| passport-linkedin-oauth2        | Sign-in with LinkedIn plugin.                                           |
| passport-local                  | Sign-in with Username and Password plugin.                              |
| passport-openid                 | Sign-in with OpenId plugin.                                             |
| passport-oauth                  | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies.      |
| passport-snapchat               | Sign-in with Snapchat plugin.                                           |
| passport-twitter                | Sign-in with Twitter plugin.                                            |
| paypal-rest-sdk                 | PayPal APIs library.                                                    |
| pug (jade)                      | Template engine for Express.                                            |
| request                         | Simplified HTTP request library.                                        |
| sinon                           | Test spies, stubs and mocks for JavaScript.                             |
| sinon-mongoose                  | Extend Sinon stubs for Mongoose methods to test chained methods easily. |
| stripe                          | Offical Stripe API library.                                             |
| supertest                       | HTTP assertion library.                                                 |
| tumblr.js                       | Tumblr API library.                                                     |
| twilio                          | Twilio API library.                                                     |
| twit                            | Twitter API library.                                                    |
| validator                       | Used in conjunction with express-validator in **controllers/api.js**.   |


License
-------

The MIT License (MIT)

Copyright (c) 2014-2019 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
