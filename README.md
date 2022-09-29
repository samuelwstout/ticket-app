# Flatiron School Phase 4 Project: a ticket app

## Description

This is a ticket app in which users can create events and buy tickets to them. As a student at Flatiron School, this is an assignment in the program to demonstrate my understanding of building a full stack web app with Ruby on Rails and React.

## A visual walkthrough

![gif](https://user-images.githubusercontent.com/63696062/192357209-47cf877d-1465-4bf4-a664-43fbe4ec48a4.gif)

## Requirements
* Ruby 2.7.4
* NodeJS (v16), and npm
* Postgresql

## For setting up, I used a project template provided by Flatiron School.

https://github.com/learn-co-curriculum/project-template-react-rails-api

I've taken the installation instructions from this project template below.

## Installation instructions
### Install Ruby

Verify which version of Ruby you're running by entering this in the terminal:
```
ruby -v
```
If it's not, you can use rvm to install a newer version of Ruby:
```
rvm install 2.7.4 --default
```
You should also install the latest versions of bundler and rails:
```
gem install bundler
gem install rails
```
### Install Node
Verify you are running a recent version of Node with:
```
node -v
```
If your Node version is not 16.x.x, install it and set it as the current and default version with:
```
nvm install 16
nvm use 16
nvm alias default 16
```
You can also update your npm version with:
```
npm i -g npm
```
### Install Postgresql for WSL
To install Postgres for WSL, run the following commands from your Ubuntu terminal:
```
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```
Then confirm that Postgres was installed successfully:
```
psql --version
```
Run this command to start the Postgres service:
```
sudo service postgresql start
```
Finally, you'll also need to create a database user so that you are able to connect to the database from Rails. First, check what your operating system username is:
```
whoami
```
If your username is "ian", for example, you'd need to create a Postgres user with that same name. To do so, run this command to open the Postgres CLI:
```
sudo -u postgres -i
```
From the Postgres CLI, run this command (replacing "ian" with your username):
```
createuser -sr ian
```
Then enter control + d or type logout to exit.
### Install Postgresql for OSX
To install Postgres for OSX, you can use Homebrew:
```
brew install postgresql
```
Once Postgres has been installed, run this command to start the Postgres service:
```
brew services start postgresql
```
## Primary features

* Uses a Rails API backend with a React frontend.
* Has three models on the backend: User, Concert, and Ticket
* This is a reciprocal many to many relationship, in which:
* Users have many tickets
* Users have many concerts through tickets
* Concerts have many tickets
* Concerts have many users through tickets
* Tickets belong to User
* Tickets belong to Concert
* There are full CRUD actions for the Ticket resource
* User and Concert resources both have create and read actions
* 8 client-side routes using React Router
* Implements authentication/authorization, including password protection with BCrypt. A user is able to:
* sign up with a new user account
* log in to the site with a secure password and stay logged in via user ID in the session hash
* log out of the site

