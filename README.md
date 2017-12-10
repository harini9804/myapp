## Synopsis

The aim of this project is to run a simple server at port 8080.

The tool used for the same is the NodeJS-Express framework.

## Installation

1.Install NodeJs:
https://nodejs.org/en/

2.Clone this repository to your local machine.

3.To install Express and the dependencies:
	
The dependencies required for this project is listed in the 'package.json' file included in this repository.

Navigate to this repository on your local machine through the command-line.

Run the command `npm install` from the command-line to install all the dependencies required.

## Using this project

1.On your machine, navigate to this repository through the command line (suitably git Bash for Windows users).

2.The _server.js_ file is used to handle the API requests and demonstrate the tasks. Hence, run the command 'node server.js'.

You should see the message, '_App is listening on port 8080_', in the command line window.

3.On your browser, go to http://localhost:8080/ to test the server.

4.The following URLs can be visited through the browser to execute the tasks mentioned:

(i) http://localhost:8080/
	
A "Hello World - Harini" message is displayed in the browser window.

(ii) http://localhost:8080/authors

A list of users and the count of their posts is displayed. 
The data is obtained through requests to the URLs-
User data: https://jsonplaceholder.typicode.com/users <br />
Posts data: https://jsonplaceholder.typicode.com/posts

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








	





