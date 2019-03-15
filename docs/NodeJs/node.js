Install Node on Ubuntu : 

http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/
https://nodejs.org/en/download/package-manager/
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server

Skeleton: A complete framework for building Node.js web applications.

https://github.com/dstroot/skeleton

CURD : 

https://zellwk.com/blog/crud-express-mongodb/

 npm init -> It will create new package.json file with applicaiton details.

$ npm install express --save

$ npm install body-parser --save

$ npm install mongodb --save

$ npm install ejs --save

*******************************
Nodemon - Nodemon restarts the server automatically whenever you save a file that the server uses. We can install Nodemon by using the following command:

$ npm install -g nodemon --save-dev

Nodemon behaves exactly the same as node, which means we can run our server by calling nodemon server.js. However, we can’t do it in the command line right now because Nodemon isn’t installed with a -g flag.

There’s one other way to run Nodemon – we can execute Nodemon from the node_modules folder. The code looks like this:

$ ./node_modules/.bin/nodemon server.js

*******************************
how do we get the input values with Express? - body-parser 

$ npm install body-parser --save

*******************************
MongoDB

ERROR : http://stackoverflow.com/questions/12831939/couldnt-connect-to-server-127-0-0-127017.
We first have to install MongoDB through npm if we want to use it as our database.

npm install mongodb --save

 correct link to our database. Most people store their databases on cloud services like mLab (formerly MongoLab). 

https://mlab.com

username : manikadarkarai 
Password : mansankan@3g

DB name : nodewar
username/password : root

To start MongoDB from terminal

$ mongo

*****************
we’re going to use Embedded JavaScript (ejs) as our template engine because it’s the easiest to start with. You’ll find it familiar from the get-go since you already know HTML and JavaScript.

We can use EJS by first installing it, then setting the view engine in Express to ejs.

$ npm install ejs --save

app.set('view engine', 'ejs')



Rajasingh Noted:
================
Good tutorial - https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/creating-your-first-app-with-node-js
