class Api::TicketsController < ApplicationController

    def index
        tickets = Ticket.all
        render json: tickets
    end

    def create
        ticket = Ticket.create(user_id: params[:user_id], concert_id: params[:concert_id], title: params[:title], date: params[:date], description: params[:description], price: params[:price], user_notes: params[:user_notes])
        render json: ticket
    end

    def destroy
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            ticket.destroy
            head :no_content
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end
end
