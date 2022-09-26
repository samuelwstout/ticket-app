# Flatiron School Phase 4 Project: a ticket app

## Description

This is a ticket app in which users can create events and buy tickets to them. As a student at Flatiron School, this is an assignment in the program to demonstrate my understanding of building a full stack web app with Ruby on Rails and React.

## A visual walkthrough

![gif](https://user-images.githubusercontent.com/63696062/192357209-47cf877d-1465-4bf4-a664-43fbe4ec48a4.gif)

## Primary features
* Uses a Rails API backend with a React frontend.
* Has three models on the backend: User, Concert, and Ticket
* This is a reciprocal many to many relationship, in which:
..* Users have many tickets
..* Users have many concerts through tickets
..* Concerts have many tickets
..* Concerts have many users through tickets
..* Tickets belong to User
..* Tickets belong to Concert
* There are full CRUD actions for the Ticket resource
* User and Concert resources both have create and read actions
* 8 client-side routes using React Router
* Implements authentication/authorization, including password protection with BCrypt. A user is able to:
..* sign up with a new user account
..* log in to the site with a secure password and stay logged in via user ID in the session hash
..* log out of the site

## For setting up, I used a project template provided by Flatiron School.

https://github.com/learn-co-curriculum/project-template-react-rails-api
