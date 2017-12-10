## Synopsis

The aim of this project is to run a simple server at port 8080.

The tool used for the same is the NodeJS-Express framework.

## Installation

The necessary modules were installed from the following web resources:

NodeJs:
https://nodejs.org/en/

Express framework:
https://expressjs.com/en/starter/installing.html

The dependencies required for this project is listed in the 'package.json' file.  

## Using this project

1.Clone this repository and get it on your local machine.

2.On your machine, navigate to this repository through the command line (suitably git Bash for Windows users).

3.The _server.js_ file is used to handle the API requests and demonstrate the tasks. Hence, run the command 'node server.js'.

You should see the message, '_App is listening on port 8080_', in the command line window.

4.On your browser, go to http://localhost:8080/ to test the server.

5.The following URLs can be visited through the browser to execute the tasks mentioned:

	(i) http://localhost:8080/

		A "Hello World - Harini" message is displayed in the browser window.

	(ii) http://localhost:8080/authors

		A list of authors and the count of their posts is displayed. 
		The data is obtained through requests to the URLs-
		 https://jsonplaceholder.typicode.com/users
		 https://jsonplaceholder.typicode.com/posts

	(iii) http://localhost:8080/setcookie

		Cookies with the key-value pairs: name-Harini, age-19 are set.

	(iv) http://localhost:8080/getcookies

		The key-value pairs of the cookies set are displayed in the browser window.

	(v) http://localhost:8080/robots.txt

		The response status is set as 401 ("Unauthorised") and the 'robots.html' file (contained in this repository) is displayed on the browser.

	(vi) http://localhost:8080/html

		The 'sample.html' file is displayed on the browser.

	(vii) http://localhost:8080/input

		The 'input.html_' file is displayed on the browser which has a textbox input field. On clicking the 'Submit' button, the data in the input field is sent as a POST request to the /data endpoint in the server.

		After clicking the 'Submit' button, you should see the data entered in input field being displayed in your command-line window. The data is also displayed on your browser window.








	





