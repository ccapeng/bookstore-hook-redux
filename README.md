# Bookstore

- This bookstore project is only frontend part. 
	- It's react hook with redux.
	- The purpose of project is to evaluate how easy to make a generic REST APIs to fit a common frontend.
	
- Backend
    - Node.js  
	    [https://github.com/ccapeng/typeorm-bookstore](https://github.com/ccapeng/typeorm-bookstore)  
	- Django  
		[https://github.com/ccapeng/bookstore_openapi](https://github.com/ccapeng/bookstore_openapi)
	- More to come...  

- To run this frontend part,

	you can run:
	`npm start`
	in the project directory.  

- Dockerify
	- Include web server and backend.
	- Deploy react to nginx.
	- django rest framework as backend server
		- To build, `docker-compose -f docker-compose.yml -f docker-compose-django.yml build`  
		    or execute `build-django.sh`
		- Run it, `docker-compose -f docker-compose.yml -f docker-compose-django.yml up`  
			or execute `run-django.sh`
		- To chekc it, just go to http://127.0.0.1/
	- node.js as backend server
		- To build, `docker-compose -f docker-compose.yml -f docker-compose-typeorm.yml build`  
	        or execute `build-typeorm.sh`
		- Run it, `docker-compose -f docker-compose.yml -f docker-compose-typeorm.yml up`  
			or execute `run-typeorm.sh`
		- To chekc it, just go to http://127.0.0.1/  
		    Do not run this with above one at the same time, 
		    since the front end use the same port.
