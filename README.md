# Introduction
This project has been developed using **HTML**, **CSS**, **SASS**, **JavaScript**, **React**, **npm** and **git**. It has been tested with **Cypress** (E2E and Component testing types) and
documented with **JSDoc** (for developers) and **MS Word** (for users). Available on desktop and mobile devices with responsive design.
The application stores all the tasks users are going to do. It can add, delete, move up or down user tasks. 
# Algorithm
Users type any task and add it to the list of tasks. If an empty string has been submitted, the application ignores it and does not add it to the list (extra spaces are trimmed).
When users want to delete a task, the application launches a filter() method which excludes the selected task and updates the current list. When users move tasks up, the application
desctructures the current array of tasks, extracts the current task and the previous one, swaps them and updates the current array. If the 1st task is chosen, the application ignores
moving it up. When users move tasks down, the application destructures the current array of tasks, extracts the current task and the next one, swaps them and updates the current array
of tasks. The last task cannot be moved down (ignored by the application).
# Application styling
## Desktop version
The layout for a desktop version of the application.
Users can always scroll to the left and right, if their task is way too long for a box ("overflow: auto" is applied)

![Desktop](https://github.com/user-attachments/assets/b7598375-ad86-4544-a77c-9af0e23b68cb)
## Mobile verison
The layout for a mobile version changes and stores all the application elements in a single column (if the viewport width is less than 700px).
An "overflow" property is applied too.

![Mobile](https://github.com/user-attachments/assets/4df9917d-6f98-416a-991d-0c3d6a6b8d9d)
# Cypress tests
## E2E testing
Here's a video of an E2E type tests with **Cypress**.

https://github.com/user-attachments/assets/86e1ecbb-a8a2-4583-b5bf-cf9ec9fb7808
## Component testing
And a video of a Component type of tests.

https://github.com/user-attachments/assets/dcfd5d85-87b0-4116-a991-37e98d094f28
# Documentation
## Developer documentation
The application has been documented for developers with **JSDoc**. Available in this repository.

![Developer](https://github.com/user-attachments/assets/0c57b2fe-b731-4a13-8368-4b0cde56f17e)
## User documentation
Finally, a documentation for users has been created with **MS Word**. [User documentation.pdf](https://github.com/user-attachments/files/16999731/User.documentation.pdf) version is available.

![User](https://github.com/user-attachments/assets/4763f9a3-e0bf-4b1b-a6d2-0fd516966c95)
