class Api::UsersController < ApplicationController
  
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
    user = User.create(params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  private

  def params
    params.permit(:username, :password, :password_confirmation)
  end

end
