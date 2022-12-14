class Api::UsersController < ApplicationController
  before_action :confirm_authentication
  skip_before_action :confirm_authentication, only: [:create, :user_params]
  # get '/api/me'
  def show
    if current_user
      render json: current_user, include: :tickets, status: :ok
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
  end

  # post '/api/signup'
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, include: :tickets, status: :ok
    else
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
