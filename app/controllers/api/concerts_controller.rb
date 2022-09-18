class Api::ConcertsController < ApplicationController
    def index
        concerts = Concert.all
        render json: concerts
    end

    def create
        concert = Concert.create(params)
        render json: concert, status: :created
    end

    private

    def params
        params.permit(:title, :date, :description, :price)
    end
end
