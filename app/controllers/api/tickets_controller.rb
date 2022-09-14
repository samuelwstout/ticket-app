class Api::TicketsController < ApplicationController
    def create
        ticket = Ticket.create(user_id: params[:user_id], concert_id: params[:concert_id])
        render json: ticket
    end
end
