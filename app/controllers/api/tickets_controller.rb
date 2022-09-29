class Api::TicketsController < ApplicationController
    before_action :confirm_authentication

    def create
        ticket = Ticket.create(user_id: params[:user_id], concert_id: params[:concert_id], user_notes: params[:user_notes])
        render json: ticket
    end

    # The issue is that any authenticated user can update and delete these. How do I verify that the ticket belongs to the user?
    
    def update
        ticket = current_user.tickets.find_by(id: params[:id])
        if ticket
            ticket.update(user_notes: params[:user_notes])
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end

    def destroy
        ticket = current_user.tickets.find_by(id: params[:id])
        if ticket
            ticket.destroy
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end
end