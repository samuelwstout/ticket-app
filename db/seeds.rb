# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

User.create(username: 'username1', password: 'password')
User.create(username: 'username2', password: 'password')
User.create(username: 'username3', password: 'password')

Concert.create(title: 'concert1', date: Date.new(2022,9,13), description: 'description for concert1')
Concert.create(title: 'concert2', date: Date.new(2022,9,14), description: 'description for concert2')
Concert.create(title: 'concert3', date: Date.new(2022,9,15), description: 'description for concert3')

Ticket.create(price: 100, user_id: 1, concert_id: 1)
Ticket.create(price: 100, user_id: 1, concert_id: 2)
Ticket.create(price: 110, user_id: 3, concert_id: 1)