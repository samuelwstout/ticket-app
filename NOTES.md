## Ticket sales app in which users create concerts and exchange tickets for those concerts with others

* user has many tickets
* user has many concerts through tickets

* ticket belongs to user
* ticket belongs to concert <br>

* concert has many tickets
* concert has many users through tickets <br>

* user: username password_digest
* concert: title date description
* ticket: price:integer concert_id user_id