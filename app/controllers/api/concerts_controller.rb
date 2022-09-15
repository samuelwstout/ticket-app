class Api::ConcertsController < ApplicationController
    def index
        concerts = Concert.all
        render json: concerts
    end

    def create
        concert = Concert.create(title: params[:title], date: params[:date], description: params[:description], price: params[:price])
        render json: concert, status: :created
    end
end
