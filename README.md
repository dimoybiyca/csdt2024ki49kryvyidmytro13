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
![Communication schema drawing](https://github.com/dimoybiyca/csdt2024ki49kryvyidmytro13/blob/feature/develop/task2/media/Communication_Schema.jpg?raw=true)
Details about technology, program language, and Hardware that will be
used in next tasks.
### Software
The frontend part of application will be written using Angular 2 with Ngrx as a Single page application(SPA). Programing language - TypeScript

### Middleware
In order to combine the frontend and the hardware, spring boot will be used, which will process requests from the Angular, transfer them to Arduino and send the response back. Programing language - Java

### Hardware
Arduino nano will be used as a server. Programing language - C++

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
### Arduino nano
 > You can use any known tool to flash Arduino
 > I am using PlatformIO extension for VS Code
 
 To flash from cli using PlatformIO core
 ```sh 
 cd iwnil_hardware
 pio run --target upload
 ```
 
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
- [PlatformIO] - Embedded development ecosystem with IoT support.

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
