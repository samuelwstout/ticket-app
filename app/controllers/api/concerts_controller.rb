class Api::ConcertsController < ApplicationController
    before_action :confirm_authentication

    def index
        concerts = Concert.all
        render json: concerts
    end

    def create
        concert = Concert.create(concert_params)
        render json: concert, status: :created
    end

    private

    def concert_params
        params.permit(:title, :date, :description, :price)
    end
end
