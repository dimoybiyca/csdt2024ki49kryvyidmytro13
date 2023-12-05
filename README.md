# CSAD

## Info
### About repository
This repository created for course "Computer systems automated design" of Lviv Polytechnic National University

### Task
The point of this course is to create a simple game using hardware and software. The hardware should act as a server and process requests from software by UART.

### Student
| Number | Student | Task | Config format|
| ------ | ------- | ---- | ------------ |
| 13 | Kryvyi Dmytro | tic-tac-toe (unlimited board) | XML |

## Project details
![Communication schema drawing](https://github.com/dimoybiyca/csdt2024ki49kryvyidmytro13/blob/feature/develop/task3/media/Communication_Schema.jpg?raw=true)
Details about technology, program language, and Hardware that will be
used in next tasks.
### Software
The frontend part of application will be written using Angular 2 with Ngrx as a Single page application(SPA). Programing language - TypeScript

### Middleware
In order to combine the frontend and the hardware, spring boot will be used, which will process requests from the Angular, transfer them to Arduino and send the response back. Programing language - Java

### Hardware
Raspberry Pi PICO will be used as a server. Programing language - C++, Framework - Arduino

### DevOps
Ansible and Jenkins will be used to simplify and automate build and deploy. Frontend and Backend will be conterised with docker

## Run
Info how to build and run application
### IWNIL_client
> Dont forget to change the address of server in environment.ts
#### Local run
`Required node v16 or higher`
 ```sh 
 ng serve
 ```
 or
 ```sh 
 npm run start
 ```
#### Docker
 ```sh 
 cd src/iwnil_client
 docker build -t <youruser>/iwnil-client:${package.json.version} .
 docker run -d -p 80:80 --restart=always --name=iwnil-client <youruser>/iwnil-client:${package.json.version}
 ```
 
### IWNIL_backend
#### Local run
`Required maven`
 ```sh
 cd src/iwnil_backend
 mvn spring-boot:run -f pom.xml
 ```
#### Docker
 ```sh 
 cd src/iwnil_backend
 mvn spring-boot:build-image -f pom.xml
 docker run -d -p 9000:9000 -devices /dev/ttyUSB0:/dev/ttyUSB0 iwnil-backend:<version>
 ```
### Raspberry Pi PICO
1. Hold the BOOTSEL button on board
2. Plug in a micro usb cable
3. Release the button when board will appear in list of devices on your PC
4. Move a firmware.uf2 file to RPI-RP2
5. Ready

### MongoDB
`Required CPU with AVX support othervise use mongo:4.4.6 or lower`
```sh
docker run -e MONGO_INITDB_ROOT_USERNAME=mongodb -e MONGO_INITDB_ROOT_PASSWORD=mongodb -p 27017:27017 -d mongo
```


## Documentation
All documentation is in the docs branch
You can download it using the following command:
```sh
git clone -b docs https://github.com/dimoybiyca/csdt2024ki49kryvyidmytro13.git
```

### IWNIL_client
Documentation for Angular client was generated with compdoc utility
You can view it by opening index.html file by any browser at **docs/iwnil-client** folder

### IWNIL_backend
Documentation for Spring Boot was generated with Javadoc utility
You can view it by opening index.html file by any browser at **docs/iwnil-backend** folder

Also was generated API documentation using swagger and api-docs
`Accesible only when server is running`
- swagger: [*http:localhost:9000/swagger-ui*](http:localhost:9000/swagger-ui)
- api-docs: [*http:localhost:9000/api-docs*](http:localhost:9000/api-docs)

### IWNIL_hardware
Documentation for Raspberry Pi PICO was generated using doxygen
You can view it by opening index.html file by any browser at **docs/iwnil-hardware/html folder**

=======

## References
- [VS Code] - Code editor with extensions for versatile development.
- [Node] - JavaScript runtime for server-side applications.
- [npm] - JavaScript package manager
- [Angular] - Framework for dynamic web apps.
- [NgRx] - State management for Angular.
- [Spring Boot] - Simplified Java application development.
- [Maven] - Build tool for Java projects.
- [Ansible] - Automation for configuration and deployments.
- [Jenkins] - CI/CD automation server.
- [Docker] - Container platform for app development.
- [Arduino] - Open-source electronics platform for DIY projects.
- [Raspberry Pi] - Compact, low-cost computer board used for learning and hobby projects.
- [PlatformIO] - Embedded development ecosystem with IoT support.
- [MongoDB] - Popular, open-source NoSQL database management system designed for flexibility and scalability
- [Doxygen] - Tool for generating documentation from annotated source code.
- [Javadoc] - Documentation generator for generating API documentation in HTML format from Java source code.
- [Compodoc] - Documentation tool for Angular applications, providing a comprehensive documentation for code.
- [Swagger] - Framework for API specification that includes a set of tools to design, build, document, and use RESTful APIs.

[Raspberry Pi]: <https://www.raspberrypi.com/>
[MongoDB]: <https://www.mongodb.com/>
[VS Code]: <https://code.visualstudio.com/>
[Angular]: <https://angular.io/>
[NgRx]: <https://ngrx.io/>
[Node]: <https://nodejs.org/en>
[npm]: <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>
[Spring Boot]: <https://spring.io/projects/spring-boot>
[Maven]: <https://maven.apache.org/>
[Ansible]: <https://docs.ansible.com/>
[Jenkins]: <https://www.jenkins.io/>
[Docker]: <https://www.docker.com/>
[Arduino]: <https://www.arduino.cc/>
[PlatformIO]: <https://platformio.org/install/cli>
[Doxygen]: <http://www.doxygen.nl/>
[Javadoc]: <https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html>
[Compodoc]: <https://compodoc.app/>
[Swagger]: <https://swagger.io/>
