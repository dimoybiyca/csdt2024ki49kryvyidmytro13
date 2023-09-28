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
