class Api::TicketsController < ApplicationController
    before_action :confirm_authentication

    def create
        ticket = Ticket.create(user_id: params[:user_id], concert_id: params[:concert_id], user_notes: params[:user_notes])
        render json: ticket
    end

    def update
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            ticket.update(user_notes: params[:user_notes])
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end

    def destroy
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            ticket.destroy
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end
end