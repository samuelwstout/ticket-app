class Api::TicketsController < ApplicationController
    def index
        tickets = Ticket.all
        render json: tickets
    end
end
